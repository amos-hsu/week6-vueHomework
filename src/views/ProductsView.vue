<template>
  <div class="container">
    <!-- row決定內層商品的數量 -->
    <div class="row row-cols-1 row-cols-lg-4 g-4 mt-2 ">
      <!-- bootstrap5寫法內層不定義寬度 -->
      <div class="col" v-for="prodcut in products" :key="prodcut.id">
          <div class="card h-100">
            <img :src="prodcut.imageUrl" class="card-img-top max-auto" style="object-fit: cover; height: 250px;" alt="">
              <div class="card-body">
                  <h5 class="card-title">{{ prodcut.title }}</h5>
                  <p class="card-text">
                    {{ prodcut.description }}
                  </p>
              </div>
              <div class="card-body">
                <router-link :to="`/product/${prodcut.id}`" class="btn btn-primary">
                  商品資訊
                </router-link>
                <button
                  type="button"
                  class="btn btn-danger"
                  @click="addToCart(prodcut.id)"
                >
                <span
                  class="spinner-grow spinner-grow-sm"
                  v-show="isLoadingItem === prodcut.id"
                ></span>
                  加到購物車
                </button>
              </div>
          </div>
      </div>
    </div>
    <!-- 分頁元件 -->
    <pagination :pages="pagination" @get-product="getProducts"
      class="mt-4">
    </pagination>
  </div>
</template>

<script>
import emitter from '@/libs/emitter'
import pagination from '@/components/Pagination.vue'

export default {
  components: {
    pagination
  },
  data () {
    return {
      cartData: {
        carts: []
      },
      products: [],
      productId: '',
      isLoadingItem: '',
      pagination: ''
    }
  },
  methods: {
    getProducts (page = 1) {
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/?page=${page}`)
        .then((res) => {
          this.products = res.data.products
          this.pagination = res.data.pagination
        })
        .catch((err) => {
          alert(err.data.message)
        })
    },
    getCart () {
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          this.cartData = res.data.data
        })
        .catch((err) => {
          alert(err.data.message)
        })
    },
    addToCart (id, qty = 1) {
      const data = {
        product_id: id,
        qty
      }
      this.isLoadingItem = id
      this.$http
        .post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`, { data })
        .then((res) => {
          alert(res.data.message)
          this.getCart()
          // this.$refs.productModal.closeModal()
          this.isLoadingItem = ''
          // get-cart
          emitter.emit('get-cart')
        })
        .catch((err) => {
          alert(err.data.message)
        })
    }
  },
  mounted () {
    this.getProducts()
    this.getCart()
  }
}
</script>
