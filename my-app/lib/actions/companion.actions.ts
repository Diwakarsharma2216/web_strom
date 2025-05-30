'use server';

import {auth} from "@clerk/nextjs/server";
import {createSupabaseClient} from "@/lib/supabase";
export const createCompanion = async (formData: CreateCompanion) => {
    const { userId: author } = await auth();


    const supabase = createSupabaseClient();

    const { data, error } = await supabase
        .from('companions')
        .insert({...formData, author })
        .select();

      

    if(error || !data) throw new Error(error?.message || 'Failed to create a companion');

    return data[0];
}


export const getAllCompanions = async () => {
    const supabase = createSupabaseClient();

    const query = supabase.from('companions').select();




    const { data: companions, error } = await query;
    
    
    

    if(error) throw new Error(error.message);

    return companions;
}


export const getCompanion = async (id: string) => {
    const supabase = createSupabaseClient();

    const { data, error } = await supabase
        .from('companions')
        .select()
        .eq('id', id);

    if(error) return console.log(error);

    return data[0];
}

export const addToSessionHistory = async (companionId: string) => {
    const { userId } = await auth();
    const supabase = createSupabaseClient();
    const { data, error } = await supabase.from('session_history')
        .insert({
            companion_id: companionId,
            user_id: userId,
        })

    if(error) throw new Error(error.message);

    return data;
}