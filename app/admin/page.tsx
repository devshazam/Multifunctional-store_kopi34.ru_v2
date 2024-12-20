
import AdminCartPage from "./comp/Admin";
import UserCartPage from "./comp/User";
import { getSession , updateSession } from '@auth0/nextjs-auth0'
import { getOrCreateUser } from '@/lib/api/UserActions';
import { Button, Result } from 'antd';

import * as Sentry from "@sentry/nextjs"


export default async function AdminPage(){

	const session = await getSession();
	const user = session?.user;
	// await updateSession({ ...session, user: { ...session?.user}});
	const admin = await getOrCreateUser(user?.email);

	if(!admin){
		Sentry.captureMessage("id=5766200; Пользователь не найден!)");
		return  (<Result
							status="warning"
							title="Пользователь не найден!"
							extra={
							<Button type="primary" key="console" href="/">
								На главную
							</Button>
							}
						/>)
	}
	return (
		<>
			<section id='tarifs' className='tarifs bg-gray-100'>
        		<div className="temp-wrapper">
          			<div className="temp-indent--center">
					{
						admin?.admin
						?
						<AdminCartPage adminEmail={admin.email} superAdmin={admin.super}/>
						:
						<UserCartPage id={admin.id} adminEmail={admin.email}/>
					}
			    	</div>
        		</div>
      		</section> 
		</>
	);
  }