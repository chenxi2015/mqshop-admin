import {columns} from './components/columns'
import {tasks} from './data/tasks.ts'
import {BreadListItem, SingleBreadcrumb} from "@/components/custom/single-breadcrumb";
import {SearchInput} from "@/components/custom/search";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {useTranslation} from "react-i18next";
import DataTableSearchBar from "@/components/custom/datatable/data-table-searchbar";
import {DataTable} from "@/components/custom/datatable/data-table";

export default function Tasks() {
  const breadList: BreadListItem[] = [{
    name: "首页",
    link: '/'
  }, {
    name: "客户管理",
    link: '/users/index'
  }];
  const {t} = useTranslation();
  const tasksList = [...tasks, ...tasks]

  return (
    <>
      {/* 面包屑 */}
      <SingleBreadcrumb breadList={breadList} />
      {/* 搜索 */}
      <DataTableSearchBar>
        <SearchInput placeholder={t('settings.search.placeholder')} className={'md:w-full lg:w-full'} type={'search'}/>
        {[1, 2, 3].map((index) => (
          <Select key={'search-' + index}>
            <SelectTrigger className="h-9">
              <SelectValue placeholder="请选择..."/>
            </SelectTrigger>
            <SelectContent className='max-h-[200px]'>
              <SelectGroup>
                <SelectLabel>状态</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        ))}
      </DataTableSearchBar>
      {/* 列表 */}
      <DataTable data={tasksList} columns={columns} />
    </>
  )
}
