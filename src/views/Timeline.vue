<template>
  <div class="timeline">
    <headeR />
    <div>
      <h1>My timeline throught out the technology field.</h1>

        <div class="event_ last">
            <div>
                <img src="../assets/achievement/milestone.png" class="ach_icon">
                <h2>Title for this event</h2>
                <p>
                    Description for this event
                </p>

                <p class="ev_date">
                    Date of this event goes here
                </p>
            </div>
        </div>
        
        <div class="event_">
            <div>
                <img src="../assets/achievement/milestone.png" class="ach_icon">
                <h2>Title for this event</h2>
                <p>
                    Description for this event
                </p>

                <p class="ev_date">
                    Date of this event goes here
                </p>
            </div>
        </div>

        <div class="event">
            <div>
                <img src="../assets/achievement/milestone.png" class="ach_icon">
                <h2>Title for this event</h2>
                <p>
                    Description for this event
                </p>

                <p class="ev_date">
                    Date of this event goes here
                </p>
            </div>
        </div>

        <div class="event_ first">
            <div>
                <img src="../assets/achievement/milestone.png" class="ach_icon">
                <h2>Title for this event</h2>
                <p>
                    Description for this event
                </p>

                <p class="ev_date">
                    Date of this event goes here
                </p>
            </div>
        </div>

    </div>
  </div>
</template>

<script>
import headeR from '@/components/navegationMenu.vue'

export default {
  name: "Timeline",
  title: "Nethanzêl Showroom",
  components: {
    headeR
  }
}
</script>

<style scoped lang="scss">

.timeline {
  mix-blend-mode: difference;
  will-change: opacity;
  padding-top: 80px;
}

h1 {
  font-size: 35px;
  letter-spacing: 3px;
  position: fixed;
  padding-top: 60px;
  text-align: center;
  width: 100%;
  background: #000;
  top: 0;
}

h2 {
  font-size: 35px;
  letter-spacing: 2px;
}

.event {
    padding: none;
    background-image: url("../assets/timelinebg_.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 98vw;
}

.event_ {
    padding: none;
    background-image: url("../assets/timelinebg.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 98vw;
}

.last {
    background-image: url("../assets/timelinebg_last.png");
}

.first {
    background-image: url("../assets/timelinebg_first.png");
}

.event div {
    position: relative;
    background: #99999944;
    height: 568px;
    width: 568px;
    border-radius: 50%;
    left: -3px;
    top: -4px;
    margin: 110px 0;
    z-index: -1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.event_ div {
    position: relative;
    background: #99999944;
    height: 568px;
    width: 568px;
    border-radius: 50%;
    left: -3px;
    top: -4px;
    margin: 110px 0;
    z-index: -1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.event p {
    margin-top: 10px;
}

.event_ p {
    margin-top: 10px;
}

.ach_icon {
    background: #fff;
    height: 180px;
    border-radius: 50%;
    margin-top: 20px;
    margin-bottom: 15px;
    object-fit: cover;
}

.ev_date {
    font-style: italic;
}

</style>