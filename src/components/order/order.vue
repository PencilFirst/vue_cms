<template>
  <div class="container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>订单管理</el-breadcrumb-item>
      <el-breadcrumb-item>订单列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-row>
        <el-col :span='8'>
          <el-input placeholder='请输入内容'>
            <el-button
              slot="append"
              icon="el-icon-search"
            ></el-button>
          </el-input>
        </el-col>
      </el-row>
      <el-table
        :data='orderList'
        border
        stripe
      >
        <el-table-column type='index'></el-table-column>
        <el-table-column
          label='订单编号'
          prop='order_number'
          width='350px'
        ></el-table-column>
        <el-table-column
          label='订单价格'
          prop='order_price'
          width='100px'
        ></el-table-column>
        <el-table-column
          label='是否付款'
          prop='pay_status'
          width='100px'
        >
          <template slot-scope="scope">
            <el-tag
              type='success'
              v-if="scope.row.pay_status === '1'"
            >已付款</el-tag>
            <el-tag
              type='danger'
              v-else
            >未付款</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          label='是否发货'
          prop='is_send'
          width='100px'
        ></el-table-column>
        <el-table-column
          label='下单时间'
          prop='create_time'
        ></el-table-column>
        <el-table-column
          label='操作'
          width='120px'
        >
          <template>
            <el-button
              type="primary"
              icon="el-icon-edit"
              size='mini'
              @click="showBox"
            ></el-button>
            <el-button
              type="success"
              icon="el-icon-location"
              size='mini'
              @click="showProgress"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pagenum"
        :page-sizes="[10, 20, 30, 50]"
        :page-size="queryInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </el-card>
    <el-dialog
      title="修改地址"
      :visible.sync="addressDialogVisible"
      width="50%"
      @close='addressDialogClosed'
    >
      <el-form
        :model="addressForm"
        :rules="addressFormRules"
        ref="addressFormRef"
        label-width="100px"
      >
        <el-form-item
          label="省市区/县"
          prop="address1"
        >
          <el-cascader
            :options="CityData"
            clearable
            v-model="addressForm.address1"
          ></el-cascader>
        </el-form-item>
        <el-form-item
          label="详细地址"
          prop="address2"
        >
          <el-input v-model="addressForm.address2"></el-input>
        </el-form-item>
      </el-form>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="addressDialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="addressDialogVisible = false"
        >确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="物流详情"
      :visible.sync="progressDialogVisible"
      width="50%"
    >
      <el-timeline>
        <el-timeline-item
          v-for="(activity, index) in progressInfo"
          :key="index"
          :timestamp="activity.time"
        >
          {{activity.context}}
        </el-timeline-item>
      </el-timeline>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="progressDialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="progressDialogVisible = false"
        >确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import CityData from './city'
export default {
  data () {
    return {
      queryInfo: {
        query: '',
        pagenum: 1,
        pagesize: 10
      },
      total: 0,
      orderList: [],
      addressDialogVisible: false,
      addressForm: {
        address1: [],
        address2: ''
      },
      addressFormRules: {
        address1: [
          { required: true, message: '请选择省市区县', trigger: 'blur' }
        ],
        address2: [
          { required: true, message: '请填写详细地址', trigger: 'blur' }
        ]
      },
      cityProps: {
        checkStrictly: true
      },
      CityData,
      progressDialogVisible: false,
      progressInfo: []
    }
  },
  created () {
    this.getOrderList()
  },
  methods: {
    async getOrderList () {
      const { data: res } = await this.$http.get('/order', { params: this.queryInfo })
      if (res.meta.status !== 200) {
        return this.$message.error('获取订单列表参数失败')
      }
      this.total = res.data.total
      this.orderList = res.data.goods
      console.log(res)
    },
    handleSizeChange (newSize) {
      this.queryInfo.pagesize = newSize
      this.getOrderList()
    },
    handleCurrentChange (newPage) {
      this.queryInfo.pagenum = newPage
      this.getOrderList()
    },
    showBox () {
      this.addressDialogVisible = true
    },
    addressDialogClosed () {
      this.$refs.addressFormRef.resetFields()
    },
    async showProgress () {
      const { data: res } = await this.$http.get('/express')
      if (res.meta.status !== 200) {
        return this.$message.error('获取物流信息失败')
      }
      this.progressInfo = res.data
      console.log(res.data)
      this.progressDialogVisible = true
    }
  }
}
</script>
<style lang="scss" scoped>
.el-cascader {
  width: 100%;
}
</style>
