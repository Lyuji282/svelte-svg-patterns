<script>
  export let segment;
  import { fly, scale, fade } from "svelte/transition";
  // import { createEventDispatcher } from "svelte";
  import { onMount } from "svelte";
  import Constants from "../routes/_constants.js";
  import Values from "../routes/_values.js";
  import { themeStore } from "../routes/stores.js";
  import LangSelect from "./LangSelect.svelte";
  import ShopSelect from "./ShopSelect.svelte";
  import lang from "../routes/_lang.js";
  let strings = lang.strings;
  let visible = true;
  let bellCount = "0";

  let starsCount = 251;

  // const dispatch = createEventDispatcher();

  // const triggerEvent = () => {
  //   dispatch("hello", "Rock");
  // };
  let dark = Values.icons.dark;
  let light = Values.icons.light;
  let theme = light;
  let toClose = false;

  let defaultNewTheme, latestUpdate;
  onMount(async () => {
    defaultNewTheme = localStorage.getItem("defaultNewTheme");

    if (!defaultNewTheme) {
      defaultNewTheme = "light";

      // if (window.matchMedia("(prefers-color-scheme)").media !== "not all") {
      //   if (window.matchMedia("(prefers-color-scheme: dark)").matches) defaultNewTheme = "dark";
      //   else defaultNewTheme = "light";
      // }

      localStorage.setItem("defaultNewTheme", defaultNewTheme);
    }
    document.documentElement.setAttribute("data-theme", defaultNewTheme);
    themeStore.set(defaultNewTheme);
    userAction();

    latestUpdate = localStorage.getItem("latestUpdate");

    if (!latestUpdate) {
      // console.log("No latest update");
      latestUpdate = Values.changeLog[0].date;
      bellCount = "3";
    } else {
      const index = Values.changeLog.findIndex((element) => {
        if (element.date === latestUpdate) return true;
      });
      // console.log(index);
      bellCount = index > 3 ? "3+" : index.toString();
    }

    // console.log(latestUpdate);
    // localStorage.setItem("latestUpdate", "June 8, 2021");
  });

  function changeTheme() {
    if (defaultNewTheme === "dark") {
      theme = light;
      defaultNewTheme = "light";
    } else {
      theme = dark;
      defaultNewTheme = "dark";
    }

    // theme = theme === dark ? light : dark;
    // themeColor = themeColor === "dark" ? "light" : "dark";
    localStorage.setItem("defaultNewTheme", defaultNewTheme);
    document.documentElement.setAttribute("data-theme", defaultNewTheme);
    themeStore.set(defaultNewTheme);

    // dispatch("theme", themeColor);
  }

  const userAction = async () => {
    const response = await fetch("https://api.github.com/search/repositories?q=svelte-svg-patterns");
    const myJson = await response.json();
    starsCount = myJson.items[0].stargazers_count;
  };

  function showNotifications(e) {
    visible = false;
    localStorage.setItem("latestUpdate", Values.changeLog[0].date);
    e.stopPropagation();
    let menu = this.nextSibling;

    while (menu && menu.nodeType != 1) {
      menu = menu.nextSibling;
    }
    if (!menu) return;
    if (menu.style.display !== "grid") {
      menu.style.display = "grid";
      if (toClose) toClose.style.display = "none";
      toClose = menu;
    } else closeAll();
  }
  
  function closeAll() {
    toClose.style.display = "none";
    toClose = false;
  }

  function closeWindow(event) {
    if (toClose) closeAll.call(event.target);
  }
</script>

<svelte:window on:click={closeWindow} />

<nav>
  <div class="logoOuter grid items-center">
    <a aria-current={segment === undefined ? "page" : undefined} href="." class="justify-self-start">
      <div class="logo" style="color: var(--secondary-color)">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="1.5em" height="1.5em" viewBox="0 0 128 128" data-inline="false">
          <g transform="translate(0 -3)" style="fill: var(--secondary-color)">
            <path
              d="M64.01 30.39c-34.48 0-51.26 20.65-51.26 46.11 0 4.45.71 8.74 2.03 12.81 2.48 7.64 6.49 15.25 6.23 23.48-.15 4.94-2.97 7.47-6.43
                10.44-1.07.92-1.27 2.42.08 3.19 3.1 1.78 8.32-.19 11.33-1.4 2.69-1.08 5.21-2.93 7.31-5.08 1.08-1.1 2.08-2.27 3.07-3.44.82-.96
                2.18-3.42 3.74-2.72 3.4 1.53-.58 7.86-2.3 9.38-.7.62-1.65 1.18-1.97 2.12-.36 1.03.37 1.93 1.3 2.3 2.6 1.04 8.28-.72 10.88-2.46
                1.86-1.25 3.41-2.85 4.71-4.68.81-1.14 2.21-4.74 4.02-4.31 3.32.8 1.92 6.03 2.14 8.3.11 1.16.78 2.32 1.94 2.77 2.52.99 4.74-.79
                6.22-2.63 1.65-2.05 2.44-4.32 3.73-6.54 1.03-1.79 2.83-2.16 4.12-.31 1.88 2.69 3.04 5.25 6.03 6.96 2.46 1.4 5.3 2.27 8.14 2.29 1.25
                0 6.79-.66 4.92-3.11-.82-1.06-2.39-1.32-3.46-2.11-1.76-1.31-2.57-3.48-2.63-5.62-.08-3.05 2.87-2.27 4.32-.8 2.35 2.38 3.75 5.76 6.78
                7.39 3.63 1.95 9.29 2.9 13.29 1.67 1.36-.42 2.92-1.01
                3.01-2.65.09-1.55-1.23-1.92-2.47-2.27-1.59-.44-2.69-.84-3.91-2.06-.92-.88-1.42-2.08-1.63-3.33-.43-2.59.02-5.5.48-7.83.82-4.19
                2.31-8.22 3.78-12.21.47-1.29.95-2.58 1.4-3.87 1.5-4.32 2.32-8.9 2.32-13.67 0-25.47-16.78-46.11-51.26-46.11zM43.928 67.25a8.75 6.789
                0 01.072 0 8.75 6.789 0 018.75 6.79A8.75 6.789 0 0144 80.827a8.75 6.789 0 01-8.75-6.789 8.75 6.789 0 018.678-6.789zm40 0a8.75 6.789
                0 01.072 0 8.75 6.789 0 018.75 6.79A8.75 6.789 0 0184 80.827a8.75 6.789 0 01-8.75-6.789 8.75 6.789 0 018.678-6.789zM71.88
                92.57c1.31.05 2.599 1.13 2.969 2.38 1.19 3.97-4.71 6.17-7.54 6.9-4.06
                1.04-8.94.39-12.08-2.58-.8-.75-1.55-1.9-1.61-3.03-.05-.86.27-1.71.86-2.33 1.24-1.3 2.99-1.29 4.39-.3 1.54 1.1 2.6 2.45 4.61 2.64
                1.66.15 3.33-.52 4.67-1.46 1.16-.81 2.16-2.28 3.73-2.22z"
            />
            <path
              d="M102.26 27.7s-1.19-1.83-3.65-2.22c-3.06-.48-6.08.07-7.05 4.51-.96 4.42-1.45 10.11 3.49 14.08l-7.6 2.13-6.51-7.89s2.52.96
                2.86-.91c.42-2.29.42-4.36.97-7.87.58-3.67 1.73-7.51 5.25-9.54 1.92-1.11 4.98-1.74 5.99-2.55.78-.63.99-2.65 1.33-4.84l5.42 4.16 1.7
                7.4z"
            />
            <circle r="11.93" cy="18.02" cx="107.39" />
            <path
              d="M25.74 27.7s1.19-1.83 3.65-2.22c3.06-.48 6.08.07 7.05 4.51.96 4.42 1.46 10.11-3.49 14.08l7.6 2.13
                6.51-7.89s-2.52.96-2.86-.91c-.42-2.29-.42-4.36-.97-7.87-.59-3.67-1.73-7.51-5.25-9.54-1.92-1.11-4.98-1.74-5.99-2.55-.78-.63-.99-2.65-1.33-4.84l-5.42
                4.16-1.7 7.4z"
            />
            <circle r="11.93" cy="18.02" cx="20.61" />
          </g>
        </svg>
        <div class="brandName">PATTERN MONSTER</div>
      </div>
    </a>
    <div class="logPopup" />

    <button class="bellIcon menuButton" title={strings.changelog} on:click={showNotifications}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon">
        <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
        <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
      </svg>
      {#if visible && parseInt(bellCount) > 0}
        <span transition:scale={{ duration: 2000 }} id="bellCount" class="bellCount">{bellCount}</span>
      {/if}
    </button>
    <div class="notifications">
      <h3>{strings.changelog}</h3>
      <ul>
        {#each Values.changeLog.slice(0, 3) as log}
          <li class="versionHeader">{log.date}</li>
          {#each log.updates as logData}
            <li>{@html logData}</li>
          {/each}
        {/each}
      </ul>
      <div class="viewLink">
        <a href="changelog"
          >{strings.viewMore}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon">
            <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5" />
            <line x1="10" y1="14" x2="20" y2="4" />
            <polyline points="15 4 20 4 20 9" />
          </svg>
        </a>
      </div>
    </div>
  </div>

  <div class="rightLinks grid grid-flow-col items-center justify-self-end">
    <a rel="noopener noreferrer" title={strings.buyCoffee} class="bmc" target="_blank" href="https://www.buymeacoffee.com/naveencs">
      {@html Constants.bmcHeader}
    </a>
    <ShopSelect />
    <!-- <a class="downloadsButton" title={strings.downloads} href="downloads">{strings.downloads}</a> -->
    <LangSelect />
    <a
      class="tweetNav"
      rel="noopener noreferrer"
      title={strings.tweet}
      target="_blank"
      href="https://twitter.com/intent/tweet?text=If%20you%20love%20creating%20SVG%20patterns%20and%20backgrounds%2C%20you%20should%20check%20this%20out.%20Generate%20fully%20customizable%20SVG%20patterns%20for%20free.%0A%0A200%2b%20patterns%20available%20at%20https%3A%2F%2Fpattern.monster%0A%0Avia%20%40Pattern_Monster%0A%0A%23svgpatterns%20%23patterns%20%23svgbackgrounds%20%23PatternMonster"
    >
      Tweet
    </a>

    <a class="gitHubIcon" rel="noopener noreferrer" title="GitHub" target="_blank" href="https://github.com/catchspider2002/svelte-svg-patterns">
      <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d={Values.icons.github} />
      </svg>
      <span class="starsCount">{starsCount}</span>
    </a>
    <button class="iconButton" aria-label={strings.changeTheme} title={strings.changeTheme} on:click={() => changeTheme()}>
      <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        {#if theme === light}
          <path transition:fly={{ y: 100, duration: 300 }} d={theme} />
        {:else}
          <path transition:fly={{ y: -100, duration: 300 }} d={theme} />
        {/if}
      </svg>
    </button>
  </div>
</nav>
