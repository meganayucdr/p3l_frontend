<template>
  <v-app id="app">
    <v-navigation-drawer
      v-model="drawer"
      app
      fixed
      :temporary="false"
      clipped
    >
      <v-list dense>
        <v-list-tile to="/">
          <v-list-tile-action>
            <v-icon></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Masuk</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/cust/register">
          <v-list-tile-action>
            <v-icon>fas fa-sign-in-alt</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Daftar</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile to="/branch">
          <v-list-tile-action>
            <v-icon>business</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Cabang</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile to="/facility">
          <v-list-tile-action>
            <v-icon>event_seat</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Fasilitas</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile to="/paidfacility">
          <v-list-tile-action>
            <v-icon>room_service</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Fasilitas Berbayar</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile to="/employee">
          <v-list-tile-action>
            <v-icon>people</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Pengguna Karyawan</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile to="/customer">
          <v-list-tile-action>
            <v-icon>face</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Pengguna Pelanggan</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile to="/season">
          <v-list-tile-action>
            <v-icon>attach_money</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Season</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>hotel</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Kamar</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/room">
          <v-list-tile-action>
            <v-icon small>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="caption">Pengelolaan Kamar</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/availableRoom">
          <v-list-tile-action>
            <v-icon small>check</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="caption">Lihat Kamar Tersedia</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile to="/roomtype">
          <v-list-tile-action>
            <v-icon>weekend</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Jenis Kamar</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile to="/reservation/guest/personal">
          <v-list-tile-action>
            <v-icon>playlist_add</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Reservasi Personal</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>bar_chart</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Laporan</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/report/monthlyIncome">
          <v-list-tile-action>
            <v-icon small>monetization_on</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="caption">Laporan Pendapatan Bulanan</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/report/numberOfGuests">
          <v-list-tile-action>
            <v-icon small>perm_contact_calendar</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="caption">Laporan Jumlah Pelanggan</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="primary" dark="" fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">Grand Atma Hotel</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null
    }),
    props: {
      source: String
    }
  }
</script>

