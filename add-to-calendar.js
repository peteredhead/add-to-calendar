const template = document.createElement("template");

template.innerHTML = `
<style>
  .add-to-calendar {
    position: relative;
    max-width: min(300px, 100%);
    margin: 1rem 0;
  }

  .prompt-text {
    display: flex;
    column-gap: 0.25rem;
    align-items: center;
  }

  .select-input,
  .select-dropdown {
    width: 100%;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
  }

  .select-input {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    padding: 0.5rem;
    cursor: pointer;
  }

  .arrow {
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #000;
  }

  .select-dropdown {
    position: absolute;
    opacity: 0;
    visibility: hidden;
    list-style: none;
    max-width: min(280px, 100%);
    padding: 10px;
    max-height: 200px;
    overflow-y: auto;
    margin-top: 0;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }

  .select-dropdown li {
    font-family: Arial, Helvetica, sans-serif;
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .select-dropdown li:hover {
    background-color: #f6f6f6;
  }

  .add-to-calendar.active .arrow {
    transform: rotate(180deg);
  }

  .add-to-calendar.active .select-dropdown {
    opacity: 1;
    visibility: visible;
  }

  .calendar-link {
    display: flex;
    column-gap: 0.5rem;
    text-decoration: none;
    color: black;
  }
  .calendar-link:hover {
    color: #121212;
  } 
  
</style>
<div class="add-to-calendar">
  <button
    class="select-input"
    role="combobox"
    aria-haspopup="listbox"
    aria-expanded="false"
    aria-controls="select-dropdown"
  >
    <span class="prompt-text">
    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 9H21M12 18V12M15 15.001L9 15M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    Add to calendar</span>
    <span class="arrow"></span>
  </button>
  <ul class="select-dropdown" role="listbox" id="select-dropdown">
    <li role="option">
      <a href="#" id="addToGoogle" class="calendar-link">
        <svg width="20px" height="20px" viewBox="-0.5 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Color-" transform="translate(-401.000000, -860.000000)"><g id="Google" transform="translate(401.000000, 860.000000)"><path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"></path><path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"></path><path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"></path><path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"></path></g></g></g></svg>
        Google
      </a>
    </li>
    <li role="option">
      <a href="#" id="addToOutlook" class="calendar-link">
        <svg width="20px" height="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>file_type_outlook</title><path d="M19.484,7.937v5.477L21.4,14.619a.489.489,0,0,0,.21,0l8.238-5.554a1.174,1.174,0,0,0-.959-1.128Z" style="fill:#0072c6"/><path d="M19.484,15.457l1.747,1.2a.522.522,0,0,0,.543,0c-.3.181,8.073-5.378,8.073-5.378V21.345a1.408,1.408,0,0,1-1.49,1.555H19.483V15.457Z" style="fill:#0072c6"/><path d="M10.44,12.932a1.609,1.609,0,0,0-1.42.838,4.131,4.131,0,0,0-.526,2.218A4.05,4.05,0,0,0,9.02,18.2a1.6,1.6,0,0,0,2.771.022,4.014,4.014,0,0,0,.515-2.2,4.369,4.369,0,0,0-.5-2.281A1.536,1.536,0,0,0,10.44,12.932Z" style="fill:#0072c6"/><path d="M2.153,5.155V26.582L18.453,30V2ZM13.061,19.491a3.231,3.231,0,0,1-2.7,1.361,3.19,3.19,0,0,1-2.64-1.318A5.459,5.459,0,0,1,6.706,16.1a5.868,5.868,0,0,1,1.036-3.616A3.267,3.267,0,0,1,10.486,11.1a3.116,3.116,0,0,1,2.61,1.321,5.639,5.639,0,0,1,1,3.484A5.763,5.763,0,0,1,13.061,19.491Z" style="fill:#0072c6"/></svg>
        Outook
      </a>
    </li>
    <li role="option">
      <a href="#" id="downloadICal" class="calendar-link">
      <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 4V17M12.5 17L7 12.2105M12.5 17L18 12.2105" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 21H19" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        iCal
      </a>
    </li>
  </ul>
</div>
  `;

class AddToCalendar extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.addToCalendar = this._shadowRoot.querySelector(".add-to-calendar");
    this.button = this._shadowRoot.querySelector("button");
    const optionsList = this._shadowRoot.querySelectorAll(
      ".select-dropdown li"
    );
    this.button.addEventListener("click", () => {
      this.addToCalendar.classList.toggle("active");
      this.button.setAttribute(
        "aria-expanded",
        this.button.getAttribute("aria-expanded") === "true" ? "false" : "true"
      );
    });

    optionsList.forEach((option) => {
      const handler = (event) => {
        if (
          event.type === "click" &&
          event.clientX !== 0 &&
          event.clientY !== 0
        ) {
          this.addToCalendar.classList.remove("active");
        }
        if (event.key === "Enter") {
          this.addToCalendar.classList.remove("active");
        }
      };
      option.addEventListener("keyup", handler);
      option.addEventListener("click", handler);
    });

    const googleLink = this._shadowRoot.querySelector("#addToGoogle");
    googleLink.setAttribute("href", this.generateGoogleUrl());
    googleLink.setAttribute("target", "_blank");

    const outlookLink = this._shadowRoot.querySelector("#addToOutlook");
    outlookLink.setAttribute("href", this.generateOutlookUrl());
    outlookLink.setAttribute("target", "_blank");

    const iCalLink = this._shadowRoot.querySelector("#downloadICal");
    iCalLink.setAttribute("href", this.generateICalFile());
    iCalLink.setAttribute("download", this.title);
  }

  get start() {
    return this.getAttribute("start");
  }

  get end() {
    return this.getAttribute("end");
  }

  get title() {
    return this.getAttribute("title");
  }

  get description() {
    return this.getAttribute("description");
  }

  get location() {
    return this.getAttribute("location");
  }

  parseTime(dateTimeString) {
    try {
      return new Date(dateTimeString).toISOString().replace(/[-:]/g, "");
    } catch (error) {
      console.error(`Failed to parse date: ${dateTimeString}`);
      return "";
    }
  }

  generateGoogleUrl() {
    const url = new URL("https://calendar.google.com/calendar/render");
    url.searchParams.set("action", "TEMPLATE");
    url.searchParams.set(
      "dates",
      `${this.parseTime(this.start)}/${this.parseTime(this.end)}`
    );
    url.searchParams.set("location", this.location);
    url.searchParams.set("text", this.title);
    url.searchParams.set("details", this.description);
    return url.toString();
  }

  generateOutlookUrl() {
    const url = new URL("https://outlook.live.com/owa/");
    url.searchParams.set("startdt", this.parseTime(this.start));
    url.searchParams.set("enddt", this.parseTime(this.end));
    url.searchParams.set("subject", encodeURIComponent(this.title));
    url.searchParams.set("location", encodeURIComponent(this.location));
    url.searchParams.set("body", encodeURIComponent(this.description));
    url.searchParams.set("allday", "false");
    url.searchParams.set(
      "uid",
      Math.floor(Math.random() * Date.now()).toString(36)
    );
    url.searchParams.set("path", "/calendar/view/Month");
    return url.toString();
  }

  generateICalFile() {
    return encodeURI(
      "data:text/calendar;charset=utf8," +
        [
          "BEGIN:VCALENDAR",
          "VERSION:2.0",
          "BEGIN:VEVENT",
          "URL:" + window.document.URL,
          "DTSTART:" + this.parseTime(this.start),
          "DTEND:" + this.parseTime(this.end),
          "SUMMARY:" + this.title,
          "DESCRIPTION:" + this.description,
          "LOCATION:" + this.location,
          "END:VEVENT",
          "END:VCALENDAR",
        ].join("\r\n")
    );
  }
}

window.customElements.define("add-to-calendar", AddToCalendar);

// Icons from: SVG Repo, www.svgrepo.com
