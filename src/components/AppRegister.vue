<template>
  <v-flex md8 offset-md4 class="mt-4 mb-3">
      <v-card width="500px">
        <v-card-title>
          <span class="headline">Daftar</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout row>
              <v-flex xs12 sm12 md12>
                <v-text-field label="Nama" v-model="editedItem.name" autofocus></v-text-field>
                <v-text-field label="Email" v-model="editedItem.email"></v-text-field>
                <v-text-field label="Password" v-model="editedItem.password" type="password" ></v-text-field>
                <v-text-field label="Nomor Identitas" v-model="editedItem.identityNumb" ></v-text-field>
                <v-text-field label="Nomor telepon" v-model="editedItem.telp_numb" ></v-text-field>
                <v-text-field label="Alamat" v-model="editedItem.address" ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs8 offset-xs5>
                <v-btn color="success" @action="save">Daftar</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
      </v-card>
  </v-flex>
</template>

<script>
  import axios from 'axios'
  import router from 'vue-router'

  export default {
    data: () => ({
      search: '',
      editedIndex: -1,
      editedItem: {
        id: '',
        name: '',
        email: '',
        password: '',
        address: '',
        identityNumb: '',
        telp_numb: '',
        status: '',
        role: '',
      },
      defaultItem: {
        id: '',
        name: '',
        email: '',
        password: '',
        address: '',
        identityNumb: '',
        telp_numb: '',
        status: '',
        role: '',
      },
      branches: [],
      roles: []
    }),

    methods: {
      save () {
          const URL = '/api/user/cust/register'
          axios.post(URL,
            {
              name: this.editedItem.name,
              email: this.editedItem.email,
              password: this.editedItem.password,
              address: this.editedItem.address,
              identityNumb: this.editedItem.identityNumb,
              telp_numb: this.editedItem.telp_numb,
              status: "Aktif",
              role: "6"
            })
            .then(response => {
              //alert(JSON.stringify(response))
              router.go('/cabang')
            })
            .catch(err => {
              //alert(JSON.stringify(err))
            })
      }
    }
  }
</script>

<style scoped>

</style>
