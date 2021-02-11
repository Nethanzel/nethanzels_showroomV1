<template>
  <div id="nav">

    <router-link to="/">
        <img  src="../assets/logo.svg" alt="logo" id="logo" class="link">
    </router-link>

    <router-link to="/about">
        <p>About</p>
    </router-link>

    <router-link to="/projects">
        <p>Projects</p>
    </router-link>

    <router-link to="/skills">
        <p>Skills</p>
    </router-link>

    <router-link to="/timeline">
        <p>Timeline</p>
    </router-link>

    <router-link to="/contact">
        <p>Contact</p>
    </router-link>

  </div>
</template>

<style scoped lang="scss">

#nav {
    top: 0;
    left: 0;
    position: fixed;
    height: 50px;
    width: 100vw;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #000;
    z-index: 100;
}

p {
    padding: 3px 15px;
    transition: .5s;
}

p:hover {
    background: #fff;
    color: rgb(99, 99, 99);
    cursor: pointer;
    transition: .3s;

}

a {
    text-decoration: none;
    margin-right: 10px;
    padding: 3px 15px;
    cursor: default;
    transition: .5s;
}
.router-link-exact-active p {
    font-weight: bold;
    border: 1px solid #fff;
}

#logo {
    height: 30px;
    position: absolute;
    top: 10px;
    left: 8px;
    cursor: pointer;
}

</style>