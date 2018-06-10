<script>
import Mapbox from 'mapbox-gl-vue'
import BaseLayout from './BaseLayout'

export default {
  name: 'BlazeMap',
  components: { Mapbox, BaseLayout },
  data: () => ({
    msg: 'Welcome to Blaze',
    accessToken: process.env.MAPBOX_ACCESS_TOKEN
  })
}
</script>

<template>
  <base-layout>
    <h1 slot="header">
      Blaze Map View
    </h1>

    <el-row class="blaze-map-container">
      <el-col :span="8">
        <el-aside width="100%">Locations</el-aside>
      </el-col>
      <el-col :span="16" class="map-container">
        <mapbox
          :access-token='accessToken'
          :map-options="{
        style: 'mapbox://styles/mapbox/light-v9',
        center: [-96, 37.8],
        zoom: 3
      }"
          :geolocate-control="{
        show: true,
        position: 'top-left'
      }">
        </mapbox>
      </el-col>
    </el-row>

  </base-layout>
</template>

<style scoped>
  #map {
    width: 100%;
    height: 100%;
  }
  .map-container, .blaze-map-container {
    display: flex;
    flex: 1;
  }
</style>
