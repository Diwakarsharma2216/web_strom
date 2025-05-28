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

    let query = supabase.from('companions').select();




    const { data: companions, error } = await query;
    
    
    

    if(error) throw new Error(error.message);

    return companions;
}
