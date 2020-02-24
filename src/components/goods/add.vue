<template>
  <div class="container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>添加商品</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-alert
        title="添加商品信息"
        type="info"
        center
        show-icon
        :closable='false'
      >
      </el-alert>
      <el-steps
        :space="200"
        :active="activeIndex - 0"
        finish-status="success"
        align-center
      >
        <el-step title="基本信息"></el-step>
        <el-step title="商品参数"></el-step>
        <el-step title="商品属性"></el-step>
        <el-step title="商品图片"></el-step>
        <el-step title="商品内容"></el-step>
        <el-step title="完成"></el-step>
      </el-steps>
      <el-form
        :model="addForm"
        :rules="addFormRules"
        ref="addFormRef"
        label-width="100px"
        label-position="top"
      >
        <el-tabs
          :tab-position="'left'"
          v-model="activeIndex"
          :before-leave='beforeTabLeave'
          @tab-click='tabClicked'
        >
          <el-tab-pane
            label="基本信息"
            name='0'
          >
            <el-form-item
              label='商品名称'
              prop='goods_name'
            >
              <el-input v-model="addForm.goods_name"></el-input>
            </el-form-item>
            <el-form-item
              label='商品价格'
              prop='goods_price'
            >
              <el-input
                v-model="addForm.goods_price"
                type='number'
              ></el-input>
            </el-form-item>
            <el-form-item
              label='商品重量'
              prop='goods_weight'
            >
              <el-input
                v-model="addForm.goods_weight"
                type='number'
              ></el-input>
            </el-form-item>
            <el-form-item
              label='商品数量'
              prop='goods_number'
            >
              <el-input
                v-model="addForm.goods_number"
                type='number'
              ></el-input>
            </el-form-item>
            <el-form-item
              label='选择商品分类'
              prop='goods_cat'
            >
              <el-cascader
                v-model="addForm.goods_cat"
                :options="cateList"
                :props="cateProps"
                @change="handleChange"
              ></el-cascader>
            </el-form-item>
          </el-tab-pane>
          <el-tab-pane
            label="商品参数"
            name='1'
          >
            <el-form-item
              :label='item.attr_name'
              v-for="item in manyTableData"
              :key='item.attr_id'
            >
              <el-checkbox-group v-model="item.attr_vals">
                <el-checkbox
                  border
                  :label="cb"
                  v-for="(cb,i) in item.attr_vals"
                  :key="i"
                ></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-tab-pane>
          <el-tab-pane
            label="商品属性"
            name='2'
          >
            <el-form-item
              :label='item1.attr_name'
              v-for="item1 in onlyTableData"
              :key='item1.attr_id'
            >
              <el-input v-model="item1.attr_vals"></el-input>
            </el-form-item>
          </el-tab-pane>
          <el-tab-pane
            label="商品图片"
            name='3'
          >
            <el-upload
              class="upload-demo"
              action="/upload"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              list-type="picture"
              :headers='headersObj'
            >
              <el-button
                size="small"
                type="primary"
              >点击上传</el-button>
              <div
                slot="tip"
                class="el-upload__tip"
              >只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-tab-pane>
          <el-tab-pane
            label="商品内容"
            name='4'
          >
            <quill-editor v-model="addForm.goods_introduce"></quill-editor>
            <el-button
              type='primary'
              @click="add"
            >添加商品</el-button>
          </el-tab-pane>
        </el-tabs>
      </el-form>
    </el-card>
    <el-dialog
      title="图片预览"
      :visible.sync="uploadDialogVisible"
      width="50%"
    >
      <img
        :src='previewUrl'
        alt=''
        width="100%"
      >
      <span
        slot="footer"
        class="dialog-footer"
      >
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: '0',
      addForm: {
        goods_name: '',
        goods_price: '',
        goods_weight: '',
        goods_number: '',
        goods_cat: [],
        pics: [],
        goods_introduce: ''
      },
      addFormRules: {
        goods_name: [
          { required: true, message: '请输入商品名称', trigger: 'blur' }
        ],
        goods_price: [
          { required: true, message: '请输入商品价格', trigger: 'blur' }
        ],
        goods_weight: [
          { required: true, message: '请输入商品重量', trigger: 'blur' }
        ],
        goods_number: [
          { required: true, message: '请输入商品数量', trigger: 'blur' }
        ],
        goods_cat: [
          { required: true, message: '请选择商品分类', trigger: 'blur' }
        ]
      },
      cateList: [],
      cateProps: {
        expandTrigger: 'hover',
        label: 'cat_name',
        value: 'cat_id',
        children: 'children'
      },
      manyTableData: [],
      onlyTableData: [],
      headersObj: {
        // 添加上传图片的token
        Authorization: window.sessionStorage.getItem('token')
        // 上传文件还需要服务器的临时地址，可以通过upload的on-success钩子函数获取服务器地址 不写。
      },
      previewUrl: '',
      uploadDialogVisible: false
    }
  },
  created () {
    this.getCateList()
  },
  methods: {
    async getCateList () {
      const { data: res } = await this.$http.get('/categories', { params: this.queryInfo })
      if (res.meta.status !== 200) {
        return this.$message.error('获取商品分类失败')
      }
      console.log(res.data)
      this.cateList = res.data.result
    },
    handleChange () {
      if (this.addForm.goods_cat.length !== 3) {
        this.addForm.goods_cat = []
      }
      console.log(this.addForm.goods_cat)
    },
    beforeTabLeave (activeName, oldActiveName) {
      // console.log('old:' + oldActiveName)
      // console.log('act:' + activeName)
      if (oldActiveName === '0' && this.addForm.goods_cat.length !== 3) {
        this.$message.error('请先选择商品分类')
        return false
      }
    },
    async tabClicked () {
      if (this.activeIndex === '1') {
        const { data: res } = await this.$http.get('/params', { params: { sel: 'many', id: this.cateId } })
        console.log(res)
        this.manyTableData = res
      } else if (this.activeIndex === '2') {
        const { data: res } = await this.$http.get('/params', { params: { sel: 'only', id: this.cateId } })
        this.onlyTableData = res
        console.log(this.onlyTableData)
      }
    },
    handlePreview (file) {
      console.log(file)
      this.previewUrl = file.url
      this.uploadDialogVisible = true
    },
    handleRemove () {

    },
    add () {
      this.$refs.addFormRef.validate(valid => {
        if (!valid) {
          return this.$message.error('请填写必要的表单项')
        }
        console.log(this.addForm)
        // 处理需要发送给服务器的请求，把所需的数据根据服务器要求格式化，然后再发送请求
        this.$router.push('/goods')
      })
    }
  },
  computed: {
    cateId () {
      if (this.addForm.goods_cat.length === 3) {
        return this.addForm.goods_cat[2]
      }
      return null
    }
  }
}
</script>
<style lang="scss" scoped>
.el-checkbox {
  margin: 0 5px 0 0 !important;
}
.el-button {
  margin: 10px 0 0 0;
}
</style>
