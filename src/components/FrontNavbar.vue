<template>
  <nav class="navbar navbar-expand-lg fixed-top mb-3 navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">店名還沒想到</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products">產品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cart">購物車</router-link>
          </li>
        </ul>
      </div>
      <div class="d-flex">
        <router-link class="nav-link" to="/login">
          <i class="bi bi-person"></i>
        </router-link>
      </div>
      <div class="d-flex">
        <a href="#" class="btn btn-sm position-relative px-1">
          <i class="bi bi-bag" style="font-size:1rem;"></i>
          <span class="position-absolute top-0 start-100
          translate-middle badge rounded-pill bg-danger">
            {{cartData.carts.length}}
            <span class="visually-hidden"></span>
          </span>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import emitter from '@/libs/emitter'

export default {
  data () {
    return {
      cartData: {
        carts: []
      }
    }
  },
  methods: {
    getCart () {
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          console.log('cart', res)
          this.cartData = res.data.data
        })
        .catch((err) => {
          alert(err.data.message)
        })
    }
  },
  mounted () {
    this.getCart()
    emitter.on('get-cart', () => {
      this.getCart()
    })
  }
}
</script>
