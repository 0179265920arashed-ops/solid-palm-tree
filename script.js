<div id="ld"><div class="lo"></div></div>
<div id="chatbase-launcher-text">AI সাপোর্ট</div>

<script>
(function() {
  // ==========================================
  // ১. সিএসএস ডিজাইন (লোডার + চ্যাট বাটন)
  // ==========================================
  const style = document.createElement('style');
  style.textContent = `
    /* লাল-কালো স্পিনার লোডার */
    #ld { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(255,255,255,0.4); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); z-index: 1000000; display: flex; justify-content: center; align-items: center; transition: opacity 0.2s ease; pointer-events: all; }
    .lo { width: 45px; height: 45px; border: 3px solid transparent; border-top: 3px solid #f00; border-radius: 50%; position: relative; animation: s1 1.2s linear infinite; }
    .lo:before { content: ""; position: absolute; top: 5px; left: 5px; right: 5px; bottom: 5px; border: 3px solid transparent; border-bottom: 3px solid #000; border-radius: 50%; animation: s2 0.8s linear infinite; }
    .lo:after { content: ""; position: absolute; top: 15px; left: 15px; right: 15px; bottom: 15px; background: #f00; border-radius: 50%; box-shadow: 0 0 10px #f00; }
    @keyframes s1 { to { transform: rotate(360deg); } }
    @keyframes s2 { to { transform: rotate(-360deg); } }

    /* লাইভ চ্যাট রোবট বাটন */
    #chatbase-bubble-button {
      background: transparent !important; border: none !important;
      width: 48px !important; height: 48px !important;
      position: fixed !important; bottom: 80px !important; left: 12px !important;
      z-index: 999999 !important; cursor: pointer !important;
      animation: moveUpDown 3s infinite ease-in-out;
      display: block !important; opacity: 1 !important;
    }
    #chatbase-bubble-button::before {
      content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
      background: url('https://cdn-icons-png.flaticon.com/512/8649/8649595.png') no-repeat center/contain !important;
    }
    #chatbase-bubble-button svg { display: none !important; }

    /* চ্যাটের 'AI সাপোর্ট' লাল নাম */
    #chatbase-launcher-text {
      position: fixed; bottom: 88px; left: 64px;
      background: #ff0000; color: #fff; padding: 4px 10px; border-radius: 12px 12px 12px 4px;
      font: bold 11px sans-serif; z-index: 999998; white-space: nowrap;
      box-shadow: 0 4px 12px rgba(255, 0, 0, 0.4);
      animation: moveUpDown 3s infinite ease-in-out; 
      display: block !important; opacity: 1 !important;
    }
    #chatbase-launcher-text::before {
      content: ""; position: absolute; left: -8px; bottom: 0;
      border-width: 8px 8px 0 0; border-style: solid; border-color: #ff0000 transparent transparent transparent;
    }
    @keyframes moveUpDown { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
  `;
  document.head.appendChild(style);

  // ==========================================
  // ২. ক্লিক অ্যানিমেশন ও লোডার লজিক
  // ==========================================
  const showLoader = () => {
    const el = document.getElementById('ld');
    if (el) { el.style.display = 'flex'; el.style.opacity = '1'; }
  };
  const hideLoader = () => {
    const el = document.getElementById('ld');
    if (el) { el.style.opacity = "0"; setTimeout(() => el.style.display = 'none', 200); }
  };
  
  document.addEventListener('DOMContentLoaded', showLoader);
  window.addEventListener('load', hideLoader);
  setTimeout(hideLoader, 2000); // ২ সেকেন্ড সেফটি গার্ড

  // যেকোনো জায়গায় বা বাটনে ক্লিক করলে লোডার অ্যানিমেশন আসার সিস্টেম
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('a, button, input[type="submit"]');
    if (btn) {
      const href = btn.getAttribute('href');
      if (!href || (href !== '#' && !href.startsWith('javascript:') && !btn.hasAttribute('download') && btn.getAttribute('target') !== '_blank')) {
        showLoader(); setTimeout(hideLoader, 3000);
      }
    }
  });

  // ==========================================
  // ৩. লাইভ চ্যাটবেস ইঞ্জিন লোডার
  // ==========================================
  window.chatbase = window.chatbase || ((...a) => (window.chatbase.q = window.chatbase.q || []).push(a));
  window.chatbase = new Proxy(window.chatbase, { get: (t, p) => p === "q" ? t.q : (...a) => t(p, ...a) });
  
  const loadChat = () => {
    const s = document.createElement("script");
    s.src = "https://www.chatbase.co/embed.min.js"; 
    s.id = "4hecuhz_MQmivLRPgoURp"; 
    s.async = true;
    document.body.appendChild(s);
  };
  if (document.readyState === "complete") { loadChat(); } else { window.addEventListener("load", loadChat); }
})();
</script>
