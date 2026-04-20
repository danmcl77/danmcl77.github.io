document.addEventListener("DOMContentLoaded", function () {
  // Page has finished loading. Now, do things.
  loadLayoutByPetraPixel();

  // Add any custom JavaScript code here...
});

function loadLayoutByPetraPixel() {
  const mainEl = document.querySelector("main");
  if (!mainEl) return;
  mainEl.insertAdjacentHTML("beforebegin", headerHTML());
  mainEl.insertAdjacentHTML("afterend", footerHTML());
  giveActiveClassToCurrentPage();
}

const nesting = getNesting();

function headerHTML() {
  // ${nesting} outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

  return `
  
      <!-- =============================================== -->
      <!-- HEADER -->
      <!-- =============================================== -->

      <header>
<div class="header-image">
          <img src="img/header.png" alt="" />
        </div>
        <div class="header-content">
	        <div class="header-title">Dan McLachlan's Funky Website</div>
	        
	        <!-- NAVIGATION -->
	        <nav style=>
	          <ul style='align-items:center;'>
	            <li><a href="index.html">Home</a></li>✦
	            <li><a href="research.html">Research/Publications</a></li>✦
	            <li><a href="cv.html">My CV</a></li>✦
	            <li>
	                <strong>Cool Corner</strong>✦
	                <ul>
	                  <li><a href="outreach.html">Outreach</a></li>
	                  <li><a href="codesnippets.html">Useful Python Snippets</a></li>
	                  <li><a href="gallery.html">Gallery</a></li>
	                  <li><a href="coolstuff.html">Art I Enjoy</a></li>
	                  
	                </ul>
	            </li>
	            <li>
	                <strong>External Pages</strong>
	                <ul>
	                  <li><a href="https://github.com/danmcl77/"><img src='icons/githubdith.png' width=15 height=15> Github</a></li>
	                  <li><a href="https://www.linkedin.com/in/dan-mclachlan-82079b243/da"><img src='icons/linkedindith.png' width=15 height=15> LinkedIn</a></li>
	                  <li><a href="https://orcid.org/0009-0002-4783-6529"><img src='icons/orciddith.png' width=15 height=15> ORCID</a></li>
	                  <li><a href="https://ui.adsabs.harvard.edu/search/fq=%7B!type%3Daqp%20v%3D%24fq_database%7D&fq_database=database%3A%20astronomy&p_=0&q=pubdate%3A%5B2020-01%20TO%209999-12%5D%20author%3A(%22McLachlan%2C%20Dan%22)&sort=date%20desc%2C%20bibcode%20desc"><img src='icons/adsdith.png' width=15 height=15> ADS Archive</a></li>
	                  <li><a href="https://crystalmeadows.bandcamp.com/"><img src='icons/bandcampdith.png' width=15 height=15> My Music on Bandcamp</a></li>
	                </ul>
	            </li>
	            
	          </ul>
	        </nav>
        	
        </div>
      </header>

	  
        
      <!-- =============================================== -->
      <!-- LEFT SIDEBAR -->
      <!-- =============================================== -->

      <aside class="left-sidebar" >
	  
        
        <div class="sidebar-section">
        <div class="sidebar-title">Email Addresses</div>
            <a href='mailto:danmclachlan77@gmail.com'>Personal Email</a></br>
            <a href='mailto:dan.mclachlan@matfyz.cuni.cz'>Professional Email</a>
          <div class="sidebar-title">My Vexillological Journey</div>
        <blockquote>
          <p align=center><img src='img/irelandflagdith.png' style='max-width:30%' height=33px>   ---->          
          <img src='img/czechflagdith.png' style='max-width:30%' height=33px></p>
          </blockquote>
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Collected Facts of Life and Aphorisms</div>
          <blockquote>
            <p>Just because you can, doesn't mean you should.</p>
            <p>It is impossible to achieve the aim without suffering.</p>
            <p>If you have an unpleasant nature and dislike people, this is no obstacle to work.</p>
            <p>Treat your friend as if they may one day become your enemy, but also treat your enemy as if they may one day become your friend.</p>
            <p>By night all cats are grey.</p>
            <p>The pen of the tongue should be dipped in the inkwell of the heart.</p>
            
            <p>Some of us kill what some of us eat.</p>
            <p>Nobody knows what happens when you die.</p>
            
          </blockquote>
        </div>
        
        
        
        <div class="sidebar-section">
          <div class="sidebar-title"></div>
          <!--
          <marquee>
          	<a href=""><img src="img/linuxnow2.gif" alt="petrapixel"></a>
          	<a href=""><img src="img/linuxonline.gif" alt="petrapixel"></a>
          	<a href=""><img src="img/ubuntu-88x31.gif" alt="petrapixel"></a>
          	<a href=""><img src="img/tiredalien2.gif" alt="petrapixel"></a>
          	
          </marquee>
         -->
          <div class='site-button'><img src="img/desktop.gif" ><img src="img/kofolabutton.png"><img src="img/guinness.png"></div>
        
        
        
          
      </aside>
	
      `;
}

function footerHTML() {
  // ${nesting} outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

  return `


      <!-- =============================================== -->
      <!-- FOOTER -->
      <!-- =============================================== -->

      <footer>
            <div>Website layout inspired by the <a href='https://en.wikipedia.org/wiki/ZX_Spectrum'>ZX Spectrum!</a> Template generated with <a href="https://petrapixel.neocities.org/coding/layout-generator.html">petrapixel's layout generator</a>.</div>
      </footer>`;
}

/* Do not edit anything below this line unless you know what you're doing. */

function giveActiveClassToCurrentPage() {
  const els = document.querySelectorAll("nav a");
  [...els].forEach((el) => {
    const href = el.getAttribute("href").replace(".html", "").replace("#", "");
    const pathname = window.location.pathname.replace("/public/", "");
    const currentHref = window.location.href.replace(".html", "") + "END";

	/* Homepage */
    if (href == "/" || href == "/index.html") {
      if (pathname == "/") {
        el.classList.add("active");
      }
    } else {
      /* Other pages */
      if (currentHref.includes(href + "END")) {
        el.classList.add("active");

        /* Subnavigation: */
		
        if (el.closest("details")) {
          el.closest("details").setAttribute("open", "open");
          el.closest("details").classList.add("active");
        }

        if (el.closest("ul")) {
          if (el.closest("ul").closest("ul")) {
          	el.closest("ul").closest("ul").classList.add("active");
          }
        }
      }
    }
  });
}

function getNesting() {
  const numberOfSlashes = window.location.pathname.split("/").length - 1;
  if (numberOfSlashes == 1) return "./";
  return "../".repeat(numberOfSlashes - 1);
}


