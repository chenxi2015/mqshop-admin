import {Outlet} from "react-router-dom";
import {Layout, LayoutBody} from "@/components/layout";
import {useRequest} from "ahooks";
import {getList} from "@/apis/user.ts";

export default function Users() {
  useRequest(getList, {defaultParams: [{id: 2}]})
  return (
      <Layout fixedHeight>
        <LayoutBody className='flex flex-col'>
          <div className='flex-1 md:m-auto lg:m-auto lg:flex-row space-y-5 md:w-10/12 lg:w-10/12'>
            <Outlet/>
          </div>
        </LayoutBody>
      </Layout>
  )
}
