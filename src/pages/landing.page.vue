<template>
  <q-layout view="lHh lpr fff">
    <q-page-container class="bg">
      <q-header class="header">
        <div :class="$q.screen.lt.md ? '' : 'row'">
          <div class="col">
            <div
              :class="
                $q.screen.lt.md
                  ? 'font3 text-center text-h2 text-primary text-weight-bolder q-mt-md'
                  : 'font3 text-left text-h2 text-primary text-weight-bolder q-pl-md q-pt-md'
              "
            >
              <q-avatar rounded size="70px">
                <img src="~assets/autobytes_logo.png" />
              </q-avatar>

              AUTOBYTES
            </div>
          </div>
          <div>
            <q-toolbar :class="$q.screen.lt.md ? 'q-pt-xs flex flex-center' : 'q-pt-xl'">
              <div :class="$q.screen.lt.md ? '' : 'row'">
                <div>
                  <q-btn
                    flat
                    label="Home"
                    :class="
                      $q.screen.lt.md ? 'text-primary' : 'q-mr-md text-primary '
                    "
                    :size="$q.screen.lt.md ? '15px' : '20px'"
                  />
                  <q-btn
                    flat
                    label="VMGO"
                    :class="
                      $q.screen.lt.md ? 'text-primary' : 'q-mr-md text-primary '
                    "
                    :size="$q.screen.lt.md ? '15px' : '20px'"
                  />
                  <q-btn
                    flat
                    label="CIT Faculties"
                    :class="
                      $q.screen.lt.md ? 'text-primary' : 'q-mr-md text-primary '
                    "
                    :size="$q.screen.lt.md ? '15px' : '20px'"
                  />
                  <q-btn
                    flat
                    label="BYTES"
                    :class="
                      $q.screen.lt.md ? 'text-primary' : 'q-mr-md text-primary '
                    "
                    :size="$q.screen.lt.md ? '15px' : '20px'"
                  />
                </div>
                <div class="">
                  <q-btn
                    rounded
                    :class="
                      $q.screen.lt.md
                        ? 'text-primary q-mb-md full-width'
                        : 'q-mr-md text-primary'
                    "
                    color="primary"
                    icon="login"
                    label="Sign In"
                    to="/login"
                  />
                </div>
              </div>
            </q-toolbar>
          </div>
        </div>
      </q-header>

      <div class="q-pa-md">
        <q-card class="my-card ">
          <q-card-section>
            <q-carousel
              class="bg-primary shadow-10"
              swipeable
              animated
              navigation
              :height="$q.screen.lt.md ? '210px' : '850px'"
              v-model="slide"
              infinite
              :autoplay="autoplay"
              arrows
              transition-prev="slide-right"
              transition-next="slide-left"
              @mouseenter="autoplay = false"
              @mouseleave="autoplay = true"
            >
              <template v-for="(img, index) in carouselList">
                <q-carousel-slide :name="img.name" :key="index">
                  <q-img
                    :src="
                      require(`src/assets/AUTOBYTES PICS/new/${img.img}`)
                    "
                  />
                </q-carousel-slide>
              </template>
            </q-carousel>
          </q-card-section>
        </q-card>
      </div>
      <div class="text-primary">
        <q-card class="q-ma-md shadow-10">
          <q-card-section>
            <div class="font3 text-h4 text-center text-weight-bolder">College of Information Technology</div>
          </q-card-section>
          <q-card-section class="font1 text-h4 text-weight-bold text-center">
            MISSION
          </q-card-section>
          <q-card-section class="text-center text-weight-medium text-h6">
            <div>
              1. To develop and offer relevant IT degree progrmas and trainings
              response to the multicultural and multi-sectional needs of the
              MINSUPALA and the ASEAN Region
            </div>
            <div>
              2.To create and produce innovative knowledge and technologies in
              Information Technology
            </div>
            <div>
              3. To provide services relevant to the IT entrepreneural needs of
              the MINSUPALA clientele and the rest of the country
            </div>
            <div>
              4. To serve as converging point of the Information Technology in
              MINSUPALA and the rest of the world
            </div>
            <div>
              5. To support the goal of MSU towards teaching and learning
              excellence through optimum utilization of Information Technology
              and
            </div>
            <div>
              6. To cultivate a morally upright, socially and environmentally
              responsible, and globally competitive IT professional
            </div>
          </q-card-section>
          <q-card-section class="font1 text-h4 text-weight-bold text-center">
            VISION
          </q-card-section>
          <q-card-section class="text-center text-weight-medium text-h6">
            The College envisions being the leading, innovative, entrepreneural
            knowledge, and IT hub in the MINSUPALA, the ASEAN region and the
            rest of the world.
          </q-card-section>
        </q-card>
      </div>
      <div>
        <q-card
          class="text-h4 text-center text-primary text-weight-bolder q-ma-md shadow-10"
        >
          <q-card-section class="font1">
            College of Information Technology Faculties
          </q-card-section>
          <q-card-section>
            <q-carousel
              class="bg-primary shadow-10"
              swipeable
              animated
              navigation
              :height="$q.screen.lt.md ? '240px' : '930px'"
              v-model="slide"
              infinite
              :autoplay="autoplay"
              arrows
              transition-prev="slide-right"
              transition-next="slide-left"
              @mouseenter="autoplay = false"
              @mouseleave="autoplay = true"
            >
              <template v-for="(pics, index) in pictureList">
                <q-carousel-slide :name="pics.name" :key="index">
                  <q-img
                    :src="
                      require(`src/assets/AUTOBYTES PICS/MSU-CIT Faculties/${pics.img}`)
                    "
                  />
                </q-carousel-slide>
              </template>
            </q-carousel>
          </q-card-section>
        </q-card>
      </div>

      <div>
        <q-card class="q-ma-md shadow-10">
          <q-card-section>
            <div
              class="font1 text-primary q-pt-md text-h4 text-center text-weight-bolder"
            >
              MEET THE MSU-BYTES OFFICERS
            </div>
            <div
              :class="
                $q.screen.lt.md
                  ? 'font2 text-primary text-weight-regular'
                  : 'font2 row text-primary text-h6 text-weight-bolder'
              "
            >
              <div class="col-6">
                <div>
                  <q-avatar
                    class="q-ma-md"
                    size="100px"
                    font-size="52px"
                    color="teal"
                    text-color="white"
                    icon="directions"
                  />
                  President
                </div>
                <div>
                  <q-avatar
                    class="q-ma-md"
                    size="100px"
                    font-size="52px"
                    color="teal"
                    text-color="white"
                    icon="directions"
                  />
                  Vice-President
                </div>
                <div>
                  <q-avatar
                    class="q-ma-md"
                    size="100px"
                    font-size="52px"
                    color="teal"
                    text-color="white"
                    icon="directions"
                  />
                  Secretary
                </div>
              </div>
              <div class="col-6">
                <div>
                  <q-avatar
                    class="q-ma-md"
                    size="100px"
                    font-size="52px"
                    color="teal"
                    text-color="white"
                    icon="directions"
                  />
                  Treasurer
                </div>
                <div>
                  <q-avatar
                    class="q-ma-md"
                    size="100px"
                    font-size="52px"
                    color="teal"
                    text-color="white"
                    icon="directions"
                  />
                  Auditor
                </div>
                <div>
                  <q-avatar
                    class="q-ma-md"
                    size="100px"
                    font-size="52px"
                    color="teal"
                    text-color="white"
                    icon="directions"
                  />
                  Public Relation Officer 1
                </div>
              </div>
            </div>
            <div>
              <q-card-actions vertical align="center">
                <q-btn
                  color="primary"
                  flat
                  dense
                  label="See more"
                  :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                  @click="expanded = !expanded"
                />
              </q-card-actions>
              <q-slide-transition>
                <div v-show="expanded">
                  <q-card-section>
                    <div
                      :class="
                        $q.screen.lt.md
                          ? 'font2 text-primary'
                          : 'font2 row text-primary text-weight-bolder text-h6'
                      "
                    >
                      <div class="col">
                        <div>
                          <q-avatar
                            class="q-ma-md"
                            size="100px"
                            font-size="52px"
                            color="teal"
                            text-color="white"
                            icon="directions"
                          />
                          Public Relation Officer 2
                        </div>
                        <div>
                          <q-avatar
                            class="q-ma-md"
                            size="100px"
                            font-size="52px"
                            color="teal"
                            text-color="white"
                            icon="directions"
                          />
                          4th Year Representative
                        </div>
                        <div>
                          <q-avatar
                            class="q-ma-md"
                            size="100px"
                            font-size="52px"
                            color="teal"
                            text-color="white"
                            icon="directions"
                          />
                          3rd Year Representative
                        </div>
                      </div>
                      <div class="col-6">
                        <div>
                          <q-avatar
                            class="q-ma-md"
                            size="100px"
                            font-size="52px"
                            color="teal"
                            text-color="white"
                            icon="directions"
                          />
                          2nd Year Representative
                        </div>
                        <div>
                          <q-avatar
                            class="q-ma-md"
                            size="100px"
                            font-size="52px"
                            color="teal"
                            text-color="white"
                            icon="directions"
                          />
                          1st Year Representative
                        </div>
                      </div>
                    </div>
                  </q-card-section>
                </div>
              </q-slide-transition>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div>
        <q-footer elevated class="bg-grey-8 text-white">
          <div>
            <q-toolbar>
              <q-toolbar-title
                :class="
                  $q.screen.lt.md ? 'text-center text-h4' : 'q-pa-lg text-h3'
                "
              >
                AUTOBYTES
              </q-toolbar-title>
            </q-toolbar>
          </div>
          <div class="flex flex-center">
            <q-icon class="q-pr-md" size="30px" name="facebook" />
            <q-icon class="q-pr-md" size="30px" name="mail" />
            <q-icon size="30px" name="phone" />
          </div>
          <div class="flex flex-center q-mt-md">
            usman12strygwyr@gmail.com
          </div>
          <div class="flex flex-center">
            krystiannemaglipac@gmail.com
          </div>
          <div class="flex flex-center">
            @ 2021 - AUTOBYTES
          </div>
        </q-footer>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      slide: "1",
      autoplay: true,
      expanded: false,
      pictureList: [
        {
          name: "1",
          img: "first_pic.jpg"
        },
        {
          name: "2",
          img: "maam_mai.jpg"
        },
        {
          name: "3",
          img: "maam_mudz.jpg"
        },
        {
          name: "4",
          img: "sir_az.jpg"
        },
        {
          name: "5",
          img: "sir_al.jpg"
        },
        {
          name: "6",
          img: "sir_bob.jpg"
        },
        {
          name: "7",
          img: "sir_domato.jpg"
        },
        {
          name: "8",
          img: "sir_jeff.jpg"
        },
        {
          name: "9",
          img: "sir_jojo.jpg"
        },
        {
          name: "10",
          img: "sir_jong.jpg"
        },
        {
          name: "11",
          img: "sir_lucs.jpg"
        },
        {
          name: "12",
          img: "sir_macfire.jpg"
        },
        {
          name: "13",
          img: "sir_mark.jpg"
        },
        {
          name: "14",
          img: "sir_peter.jpg"
        },
        {
          name: "15",
          img: "sir_zac.jpg"
        }
      ],
      carouselList: [
        {
          name: "1",
          img: "carousel_1.jpg"
        },
        {
          name: "2",
          img: "carousel_2.jpg"
        },
        {
          name: "3",
          img: "carousel_3.jpg"
        },
        {
          name: "4",
          img: "carousel_4.jpg"
        },
        {
          name: "5",
          img: "carousel_5.jpg"
        }
      ]
    };
  }
};
</script>

<style>
.bg {
  background: lightblue;
}
.header {
  -webkit-backdrop-filter: blur(7px);
  backdrop-filter: blur(7px);
  background: linear-gradient(to top, #0066eb23 100%, #d1e6eb9d 100%);
}
</style>
