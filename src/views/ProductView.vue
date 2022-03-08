<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6">
        <img class="img-fluid" :src="product.imageUrl" alt="" />
      </div>
      <div class="col-sm-6">
        <span class="badge bg-primary rounded-pill">{{ }}</span>
          <h2>{{product.title }}</h2>
          <p>{{product.description }}</p>
          <div class="h5" v-if="product.price===product.origin_price">{{ product.price }} 元</div>
        <div v-else>
          <del class="h6">原價 {{ product.origin_price}} 元</del>
          <div class="h5">現在只要 {{product.price }} 元</div>
        </div>
        <div class="input-group" >
          <select id="" class="form-select" v-model.number="qty">
            <option :value="num" v-for="num in 20" :key="num + '1234'" >
              {{ num }}
            </option>
          </select>
            <button type="button" class="btn btn-danger" @click="addToCart(product.id, qty)">
              加入購物車
            </button>
        </div>
        <router-link to="/cart" class="btn btn-primary d-flex justify-content-center mt-2" >檢視購物車</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from '@/libs/emitter'
export default {
  data () {
    return {
      product: {},
      qty: 1,
      isLoadingItem: ''
    }
  },
  methods: {
    getProduct () {
      const { id } = this.$route.params
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`
      this.$http.get(url).then((res) => {
        this.product = res.data.product
      })
    },
    addToCart (id, qty = 1) {
      const data = {
        product_id: id,
        qty
      }
      this.isLoadingItem = id
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.post(url, { data })
        .then(res => {
          this.isLoadingItem = ''
          alert(res.data.message)
          emitter.emit('get-cart')
        })
        .catch(err => {
          console.log(err.data.message)
          this.isLoadingItem = ''
        })
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>
