<script setup lang="ts">
import { exportExcel } from '@xszs/utils'

const handelExportExcel = () => {
  exportExcel([
    {
      data: [
        {
          name: '张三xxxxxxxxxxxxxdasasdasdasdsadasadsda',
          age: 18,
          gender: '男',
        },
      ],
      tableHeader: [
        {
          header: '姓名',
          key: 'name',
        },
        {
          header: '年龄',
          key: 'age',
        },
        {
          header: '性别',
          key: 'gender',
        },
      ],
      sheetName: '用户信息',
      plugins: [
        {
          name: 'autoBestWidth',
        }
      ]
    },
  ], 'test')
}


defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <div>
    <button @click="handelExportExcel" p-2 rounded-md flex justify-center items-center text-white bg="~ red"
      hover=" bg-blue-500">
      导出文件
    </button>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
