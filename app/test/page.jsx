"use client";
import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AccountForm({ user }) {
  const supabase = createClient();
  const [loading, setLoading] = useState(true);
  const [fullname, setFullname] = useState(null);
  const [username, setUsername] = useState(null);
  const [website, setWebsite] = useState(null);

  const getProfile = useCallback(async () => {
    try {
      setLoading(true);

      const { data, error, status } = await supabase
        .from("profiles")
        .select(`full_name, username, website, avatar_url`)
        .eq("id", user?.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setFullname(data.full_name);
        setUsername(data.username);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      alert("Error loading user data!");
    } finally {
      setLoading(false);
    }
  }, [user, supabase]);

  useEffect(() => {
    getProfile();
  }, [user, getProfile]);

  async function updateProfile({ username, website, avatar_url }) {
    try {
      setLoading(true);

      const { error } = await supabase.from("profiles").upsert({
        id: user?.id,
        full_name: fullname,
        username,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      });
      if (error) throw error;
      alert("Profile updated!");
    } catch (error) {
      alert("Error updating the data!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Background />
      <Navbar />
      <div className="mainbgColor px-10 py-7 my-56 mx-auto w-1/2 rounded-md">
        <h1 className="text-white text-center font-serif mb-4 text-4xl">
          Account
        </h1>
        <div className="text-white text-center font-serif mb-2">
          <label htmlFor="email">Email: </label>
          <input id="email" type="text" value={user?.email} disabled />
        </div>
        <div className="text-white text-center font-serif mb-2">
          <label htmlFor="fullName">Full Name: </label>
          <input
            className="rounded"
            id="fullName"
            type="text"
            value={fullname || ""}
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>
        <div className="text-white text-center font-serif mb-2">
          <label htmlFor="username">Username: </label>
          <input
            className="rounded"
            id="username"
            type="text"
            value={username || ""}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="text-white text-center font-serif mb-2">
          <label htmlFor="website">Website</label>
          <input
            className="rounded"
            id="website"
            type="url"
            value={website || ""}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>

        <div className="text-white text-center font-serif mt-4 mb-2 ">
          <button
            className="button primary items-center navbgColor grid-col-1 p-4 rounded text-xlg font-semibold"
            onClick={() =>
              updateProfile({ fullname, username, website, avatar_url })
            }
            disabled={loading}
          >
            {loading ? "Loading ..." : "Update"}
          </button>
        </div>

        <div className="text-white text-center justify-center font-serif">
          <form action="/auth/signout" method="post">
            <button
              className="button navbgColor p-4 rounded text-xlg grid-col-1 items-center font-semibold"
              type="submit"
            >
              Sign out
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
