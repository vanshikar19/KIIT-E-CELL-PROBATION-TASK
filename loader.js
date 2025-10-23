async function loadComponent(url) {
  console.log("Loading component from:", url);
  try {
    const response = await fetch(url + "/index.html");
    const html = await response.text();
    document.body.insertAdjacentHTML("beforeend", `${html}`);
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url + "/style.css";
    document.head.appendChild(link);
    try {
      const scriptResponse = await fetch(url + "/script.js");
      if (scriptResponse.ok) {
        const script = document.createElement("script");
        script.src = url + "/script.js";
        document.head.appendChild(script);
      }
    } catch (error) {
      console.log(`No script file found for ${url}`);
    }
  } catch (error) {
    console.error(`Error loading component ${url}:`, error);
  }
}

async function loadAllComponents() {
  const components = [
    "Navbar",
    "HeroSection",
    "Sessions",
    "AboutUs",
    "Speakers",
    "Testimonials",
    "Faq",
    //"Registration",
    "Footer",
  ];

  // Load components sequentially to maintain order
  for (const component of components) {
    await loadComponent(`components/${component}`);
  }
}

// Start loading components
loadAllComponents();
