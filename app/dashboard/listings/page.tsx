import React from 'react';
import { createClient } from '@/lib/supabase/server';
import type { Property } from '@/lib/database.types';
import MyListingsClient from './MyListingsClient';

export default async function MyListingsPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Fetch user's properties
  const { data: properties, error } = user
    ? await supabase
        .from('properties')
        .select('*')
        .eq('owner_id', user.id)
        .order('created_at', { ascending: false })
    : { data: [], error: null };

  const listings = (properties || []) as Property[];

  return (
    <MyListingsClient
      initialListings={listings}
      initialError={error?.message || null}
    />
  );
}
