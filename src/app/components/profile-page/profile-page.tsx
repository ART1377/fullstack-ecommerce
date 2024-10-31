import React, { Suspense } from "react";
import ProfilePageFavorites from "./favorites/favorites";
import ProfilePageUserCard from "./user-card/user-card";
import ProfilePageOrders from "./profile-page-orders/profile-page-orders";
import { auth } from "@/app/auth";
import * as actions from "@/app/actions/user-actions/user-actions";
import Spinner from "../spinner/spinner";
import Breadcrumb from "../breadcrumb/breadcrumb";

type Props = {};

const ProfilePage = async (props: Props) => {
  const session = await auth();

  const { user } = await actions.getUserProfileInformation(session?.user?.id!);

  // await db.order.deleteMany()

  return (
    <>
      <Breadcrumb />
      {session && session?.user && user && (
        <section className="w-full mt-4 sm:mt-6 flex flex-col gap-y-8 md:flex-row">
          {/* user card */}
          <ProfilePageUserCard user={user} />
          {/* user info */}
          <div className="w-full flex flex-col gap-3 shadow bg-white rounded-xl p-3 pb-8 md:w-[calc(100%-300px)]">
            {/* orders */}
            <Suspense fallback={<Spinner size={50} />}>
              <ProfilePageOrders />
            </Suspense>
            {/* favorites */}
            <Suspense fallback={<Spinner size={50} />}>
              <ProfilePageFavorites />
            </Suspense>
          </div>
        </section>
      )}
    </>
  );
};

export default ProfilePage;
