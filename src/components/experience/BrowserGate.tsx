"use client";

import { useState, useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

function isFirefox(): boolean {
  if (typeof navigator === "undefined") return false;
  return /firefox|fxios/i.test(navigator.userAgent);
}

function ChromeLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
      <path fill="#fff" d="M128.003 199.216c39.335 0 71.221-31.888 71.221-71.223S167.338 56.77 128.003 56.77S56.78 88.658 56.78 127.993s31.887 71.223 71.222 71.223" />
      <path fill="#229342" d="M35.89 92.997Q27.92 79.192 17.154 64.02a127.98 127.98 0 0 0 110.857 191.981q17.671-24.785 23.996-35.74q12.148-21.042 31.423-60.251v-.015a63.993 63.993 0 0 1-110.857.017Q46.395 111.19 35.89 92.998" />
      <path fill="#fbc116" d="M128.008 255.996A127.97 127.97 0 0 0 256 127.997A128 128 0 0 0 238.837 64q-36.372-3.585-53.686-3.585q-19.632 0-57.152 3.585l-.014.01a63.99 63.99 0 0 1 55.444 31.987a63.99 63.99 0 0 1-.001 64.01z" />
      <path fill="#1a73e8" d="M128.003 178.677c27.984 0 50.669-22.685 50.669-50.67s-22.685-50.67-50.67-50.67c-27.983 0-50.669 22.686-50.669 50.67s22.686 50.67 50.67 50.67" />
      <path fill="#e33b2e" d="M128.003 64.004H238.84a127.973 127.973 0 0 0-221.685.015l55.419 95.99l.015.008a63.993 63.993 0 0 1 55.415-96.014z" />
    </svg>
  );
}

function EdgeLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
      <defs>
        <radialGradient id="edgeA" cx="161.83" cy="788.401" r="95.38" gradientTransform="matrix(.9999 0 0 .9498 -4.622 -570.387)" gradientUnits="userSpaceOnUse"><stop offset=".72" stopOpacity="0" /><stop offset=".95" stopOpacity=".53" /><stop offset="1" /></radialGradient>
        <radialGradient id="edgeB" cx="-773.636" cy="746.715" r="143.24" gradientTransform="matrix(.15 -.9898 .8 .12 -410.718 -656.341)" gradientUnits="userSpaceOnUse"><stop offset=".76" stopOpacity="0" /><stop offset=".95" stopOpacity=".5" /><stop offset="1" /></radialGradient>
        <radialGradient id="edgeC" cx="230.593" cy="-106.038" r="202.43" gradientTransform="matrix(-.04 .9998 -2.1299 -.07998 -190.775 -191.635)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#35c1f1" /><stop offset=".11" stopColor="#34c1ed" /><stop offset=".23" stopColor="#2fc2df" /><stop offset=".31" stopColor="#2bc3d2" /><stop offset=".67" stopColor="#36c752" /></radialGradient>
        <radialGradient id="edgeD" cx="536.357" cy="-117.703" r="97.34" gradientTransform="matrix(.28 .9598 -.78 .23 -1.928 -410.318)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#66eb6e" /><stop offset="1" stopColor="#66eb6e" stopOpacity="0" /></radialGradient>
        <linearGradient id="edgeE" x1="63.334" x2="241.617" y1="757.83" y2="757.83" gradientTransform="translate(-4.63 -580.81)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#0c59a4" /><stop offset="1" stopColor="#114a8b" /></linearGradient>
        <linearGradient id="edgeF" x1="157.401" x2="46.028" y1="680.556" y2="801.868" gradientTransform="translate(-4.63 -580.81)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#1b9de2" /><stop offset=".16" stopColor="#1595df" /><stop offset=".67" stopColor="#0680d7" /><stop offset="1" stopColor="#0078d4" /></linearGradient>
      </defs>
      <path fill="url(#edgeE)" d="M231 190.5c-3.4 1.8-6.9 3.4-10.5 4.7c-11.5 4.3-23.6 6.5-35.9 6.5c-47.3 0-88.5-32.5-88.5-74.3c.1-11.4 6.4-21.9 16.4-27.3c-42.8 1.8-53.8 46.4-53.8 72.5c0 73.9 68.1 81.4 82.8 81.4c7.9 0 19.8-2.3 27-4.6l1.3-.4c27.6-9.5 51-28.1 66.6-52.8c1.2-1.9.6-4.3-1.2-5.5c-1.3-.8-2.9-.9-4.2-.2" />
      <path fill="url(#edgeA)" d="M231 190.5c-3.4 1.8-6.9 3.4-10.5 4.7c-11.5 4.3-23.6 6.5-35.9 6.5c-47.3 0-88.5-32.5-88.5-74.3c.1-11.4 6.4-21.9 16.4-27.3c-42.8 1.8-53.8 46.4-53.8 72.5c0 73.9 68.1 81.4 82.8 81.4c7.9 0 19.8-2.3 27-4.6l1.3-.4c27.6-9.5 51-28.1 66.6-52.8c1.2-1.9.6-4.3-1.2-5.5c-1.3-.8-2.9-.9-4.2-.2" opacity=".35" />
      <path fill="url(#edgeF)" d="M105.7 241.4c-8.9-5.5-16.6-12.8-22.7-21.3c-26.3-36-18.4-86.5 17.6-112.8c3.8-2.7 7.7-5.2 11.9-7.2c3.1-1.5 8.4-4.1 15.5-4c10.1.1 19.6 4.9 25.7 13c4 5.4 6.3 11.9 6.4 18.7c0-.2 24.5-79.6-80-79.6c-43.9 0-80 41.7-80 78.2c-.2 19.3 4 38.5 12.1 56c27.6 58.8 94.8 87.6 156.4 67.1c-21.1 6.6-44.1 3.7-62.9-8.1" />
      <path fill="url(#edgeB)" d="M105.7 241.4c-8.9-5.5-16.6-12.8-22.7-21.3c-26.3-36-18.4-86.5 17.6-112.8c3.8-2.7 7.7-5.2 11.9-7.2c3.1-1.5 8.4-4.1 15.5-4c10.1.1 19.6 4.9 25.7 13c4 5.4 6.3 11.9 6.4 18.7c0-.2 24.5-79.6-80-79.6c-43.9 0-80 41.7-80 78.2c-.2 19.3 4 38.5 12.1 56c27.6 58.8 94.8 87.6 156.4 67.1c-21.1 6.6-44.1 3.7-62.9-8.1" opacity=".41" />
      <path fill="url(#edgeC)" d="M152.3 148.9c-.8 1-3.3 2.5-3.3 5.7c0 2.6 1.7 5.1 4.7 7.2c14.4 10 41.5 8.7 41.6 8.7c10.7 0 21.1-2.9 30.3-8.3c18.8-11 30.4-31.1 30.4-52.9c.3-22.4-8-37.3-11.3-43.9C223.5 23.9 177.7 0 128 0C58 0 1 56.2 0 126.2c.5-36.5 36.8-66 80-66c3.5 0 23.5.3 42 10.1c16.3 8.6 24.9 18.9 30.8 29.2c6.2 10.7 7.3 24.1 7.3 29.5c0 5.3-2.7 13.3-7.8 19.9" />
      <path fill="url(#edgeD)" d="M152.3 148.9c-.8 1-3.3 2.5-3.3 5.7c0 2.6 1.7 5.1 4.7 7.2c14.4 10 41.5 8.7 41.6 8.7c10.7 0 21.1-2.9 30.3-8.3c18.8-11 30.4-31.1 30.4-52.9c.3-22.4-8-37.3-11.3-43.9C223.5 23.9 177.7 0 128 0C58 0 1 56.2 0 126.2c.5-36.5 36.8-66 80-66c3.5 0 23.5.3 42 10.1c16.3 8.6 24.9 18.9 30.8 29.2c6.2 10.7 7.3 24.1 7.3 29.5c0 5.3-2.7 13.3-7.8 19.9" />
    </svg>
  );
}

function FirefoxLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 265">
      <path fill="url(#fxA)" d="M248.033 88.713c-5.569-13.399-16.864-27.866-25.71-32.439a133.2 133.2 0 0 1 12.979 38.9l.023.215c-14.49-36.126-39.062-50.692-59.13-82.41a155 155 0 0 1-3.019-4.907a41 41 0 0 1-1.412-2.645a23.3 23.3 0 0 1-1.912-5.076a.33.33 0 0 0-.291-.331a.5.5 0 0 0-.241 0c-.016 0-.043.03-.063.037s-.063.036-.092.049l.049-.086c-32.19 18.849-43.113 53.741-44.118 71.194a64.1 64.1 0 0 0-35.269 13.593a38 38 0 0 0-3.307-2.506a59.4 59.4 0 0 1-.36-31.324a94.9 94.9 0 0 0-30.848 23.841h-.06c-5.079-6.438-4.722-27.667-4.431-32.102a23 23 0 0 0-4.279 2.272a93.4 93.4 0 0 0-12.526 10.73a112 112 0 0 0-11.98 14.375v.019v-.023A108.3 108.3 0 0 0 4.841 108.92l-.171.846a204 204 0 0 0-1.26 8.003c0 .096-.02.185-.03.281a122 122 0 0 0-2.08 17.667v.662c.086 98.661 106.944 160.23 192.344 110.825a128.17 128.17 0 0 0 62.12-89.153c.215-1.653.39-3.29.582-4.96a131.8 131.8 0 0 0-8.313-64.378" />
      <path fill="url(#fxB)" d="M248.033 88.713c-5.569-13.399-16.864-27.866-25.71-32.439a133.2 133.2 0 0 1 12.979 38.9v.122l.023.136a116.07 116.07 0 0 1-3.988 86.497c-14.688 31.516-50.242 63.819-105.894 62.248c-60.132-1.703-113.089-46.323-122.989-104.766c-1.802-9.216 0-13.888.906-21.378a95.4 95.4 0 0 0-2.06 17.684v.662c.086 98.661 106.944 160.23 192.344 110.825a128.17 128.17 0 0 0 62.12-89.153c.215-1.653.39-3.29.582-4.96a131.8 131.8 0 0 0-8.313-64.378" />
      <path fill="url(#fxC)" d="M185.754 103.778c.278.195.536.39.797.585a69.8 69.8 0 0 0-11.904-15.525C134.815 48.999 164.208 2.457 169.165.093l.049-.073c-32.19 18.849-43.113 53.741-44.118 71.194c1.495-.103 2.976-.229 4.504-.229a64.68 64.68 0 0 1 56.154 32.793" />
      <path fill="url(#fxD)" d="M129.683 111.734c-.212 3.188-11.475 14.182-15.413 14.182c-36.443 0-42.359 22.046-42.359 22.046c1.614 18.564 14.55 33.854 30.187 41.942c.714.371 1.439.705 2.163 1.032a71 71 0 0 0 3.763 1.541a57 57 0 0 0 16.675 3.217c63.876 2.996 76.25-76.384 30.154-99.419a44.24 44.24 0 0 1 30.901 7.503A64.68 64.68 0 0 0 129.6 70.985c-1.521 0-3.009.126-4.504.229a64.1 64.1 0 0 0-35.269 13.593c1.954 1.654 4.16 3.863 8.806 8.442c8.696 8.568 31 17.443 31.05 18.485" />
      <path fill="url(#fxE)" d="M83.852 80.545a82 82 0 0 1 2.645 1.756a59.4 59.4 0 0 1-.36-31.324a94.9 94.9 0 0 0-30.849 23.841c.625-.017 19.216-.351 28.564 5.727" />
      <path fill="url(#fxF)" d="M2.471 139.411c9.89 58.443 62.857 103.063 122.989 104.766c55.652 1.574 91.205-30.732 105.894-62.248a116.07 116.07 0 0 0 3.988-86.497v-.122c0-.096-.02-.153 0-.123l.023.215c4.547 29.684-10.552 58.443-34.155 77.889l-.073.166c-45.989 37.455-90.002 22.598-98.91 16.533a65 65 0 0 1-1.865-.929c-26.814-12.817-37.891-37.247-35.517-58.198a32.91 32.91 0 0 1-30.359-19.096a48.34 48.34 0 0 1 47.117-1.891a63.82 63.82 0 0 0 48.119 1.891c-.049-1.042-22.353-9.92-31.05-18.484c-4.646-4.58-6.851-6.786-8.805-8.442a38 38 0 0 0-3.307-2.507c-.761-.519-1.617-1.081-2.645-1.756c-9.348-6.078-27.939-5.744-28.554-5.727h-.059c-5.079-6.438-4.722-27.667-4.431-32.101a23 23 0 0 0-4.279 2.271a93.4 93.4 0 0 0-12.526 10.73a112 112 0 0 0-12.03 14.342v.019v-.023A108.3 108.3 0 0 0 4.841 108.92c-.062.261-4.616 20.167-2.37 30.491" />
      <path fill="url(#fxG)" d="M174.654 88.838a69.8 69.8 0 0 1 11.904 15.542a27 27 0 0 1 1.921 1.574c29.056 26.784 13.832 64.646 12.698 67.341c23.603-19.447 38.688-48.205 34.155-77.89c-14.497-36.142-39.069-50.708-59.137-82.426a155 155 0 0 1-3.019-4.907a41 41 0 0 1-1.412-2.645a23.3 23.3 0 0 1-1.912-5.076a.33.33 0 0 0-.291-.331a.5.5 0 0 0-.241 0c-.016 0-.043.03-.063.037s-.063.036-.092.049c-4.957 2.351-34.35 48.893 5.489 88.732" />
      <path fill="url(#fxH)" d="M188.459 105.937a27 27 0 0 0-1.921-1.574c-.261-.195-.519-.39-.797-.585a44.24 44.24 0 0 0-30.901-7.503c46.095 23.048 33.728 102.415-30.154 99.419a57 57 0 0 1-16.675-3.217a67 67 0 0 1-3.763-1.541c-.725-.331-1.449-.661-2.163-1.032l.089.057c8.908 6.081 52.907 20.938 98.91-16.534l.073-.165c1.147-2.679 16.371-40.55-12.698-67.325" />
      <path fill="url(#fxI)" d="M71.911 147.962s5.916-22.046 42.359-22.046c3.938 0 15.211-10.994 15.413-14.182a63.82 63.82 0 0 1-48.119-1.892a48.34 48.34 0 0 0-47.118 1.892a32.91 32.91 0 0 0 30.359 19.096c-2.374 20.955 8.703 45.385 35.517 58.198c.599.288 1.161.599 1.776.873c-15.65-8.085-28.573-23.375-30.187-41.939" />
      <defs>
        <radialGradient id="fxA" cx="-7907.187" cy="-8515.121" r="80.797" gradientTransform="translate(26367.938 28186.305)scale(3.3067)" gradientUnits="userSpaceOnUse"><stop offset=".129" stopColor="#ffbd4f"/><stop offset=".186" stopColor="#ffac31"/><stop offset=".247" stopColor="#ff9d17"/><stop offset=".283" stopColor="#ff980e"/><stop offset=".403" stopColor="#ff563b"/><stop offset=".467" stopColor="#ff3750"/><stop offset=".71" stopColor="#f5156c"/><stop offset=".782" stopColor="#eb0878"/><stop offset=".86" stopColor="#e50080"/></radialGradient>
        <radialGradient id="fxB" cx="-7936.711" cy="-8482.089" r="80.797" gradientTransform="translate(26367.938 28186.305)scale(3.3067)" gradientUnits="userSpaceOnUse"><stop offset=".3" stopColor="#960e18"/><stop offset=".351" stopColor="#b11927" stopOpacity=".74"/><stop offset=".435" stopColor="#db293d" stopOpacity=".343"/><stop offset=".497" stopColor="#f5334b" stopOpacity=".094"/><stop offset=".53" stopColor="#ff3750" stopOpacity="0"/></radialGradient>
        <radialGradient id="fxC" cx="-7926.97" cy="-8533.457" r="58.534" gradientTransform="translate(26367.938 28186.305)scale(3.3067)" gradientUnits="userSpaceOnUse"><stop offset=".132" stopColor="#fff44f"/><stop offset=".252" stopColor="#ffdc3e"/><stop offset=".506" stopColor="#ff9d12"/><stop offset=".526" stopColor="#ff980e"/></radialGradient>
        <radialGradient id="fxD" cx="-7945.648" cy="-8460.984" r="38.471" gradientTransform="translate(26367.938 28186.305)scale(3.3067)" gradientUnits="userSpaceOnUse"><stop offset=".353" stopColor="#3a8ee6"/><stop offset=".472" stopColor="#5c79f0"/><stop offset=".669" stopColor="#9059ff"/><stop offset="1" stopColor="#c139e6"/></radialGradient>
        <radialGradient id="fxE" cx="-7935.62" cy="-8491.546" r="20.397" gradientTransform="matrix(3.21411 -.77707 .90934 3.76301 33365.914 25904.014)" gradientUnits="userSpaceOnUse"><stop offset=".206" stopColor="#9059ff" stopOpacity="0"/><stop offset=".278" stopColor="#8c4ff3" stopOpacity=".064"/><stop offset=".747" stopColor="#7716a8" stopOpacity=".45"/><stop offset=".975" stopColor="#6e008b" stopOpacity=".6"/></radialGradient>
        <radialGradient id="fxF" cx="-7937.731" cy="-8518.427" r="27.676" gradientTransform="translate(26367.938 28186.305)scale(3.3067)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ffe226"/><stop offset=".121" stopColor="#ffdb27"/><stop offset=".295" stopColor="#ffc82a"/><stop offset=".502" stopColor="#ffa930"/><stop offset=".732" stopColor="#ff7e37"/><stop offset=".792" stopColor="#ff7139"/></radialGradient>
        <radialGradient id="fxG" cx="-7915.977" cy="-8535.981" r="118.081" gradientTransform="translate(26367.938 28186.305)scale(3.3067)" gradientUnits="userSpaceOnUse"><stop offset=".113" stopColor="#fff44f"/><stop offset=".456" stopColor="#ff980e"/><stop offset=".622" stopColor="#ff5634"/><stop offset=".716" stopColor="#ff3647"/><stop offset=".904" stopColor="#e31587"/></radialGradient>
        <radialGradient id="fxH" cx="-7927.165" cy="-8522.859" r="86.499" gradientTransform="matrix(.3472 3.29017 -2.15928 .22816 -15491.597 28008.376)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fff44f"/><stop offset=".06" stopColor="#ffe847"/><stop offset=".168" stopColor="#ffc830"/><stop offset=".304" stopColor="#ff980e"/><stop offset=".356" stopColor="#ff8b16"/><stop offset=".455" stopColor="#ff672a"/><stop offset=".57" stopColor="#ff3647"/><stop offset=".737" stopColor="#e31587"/></radialGradient>
        <radialGradient id="fxI" cx="-7938.383" cy="-8508.176" r="73.72" gradientTransform="translate(26367.938 28186.305)scale(3.3067)" gradientUnits="userSpaceOnUse"><stop offset=".137" stopColor="#fff44f"/><stop offset=".48" stopColor="#ff980e"/><stop offset=".592" stopColor="#ff5634"/><stop offset=".655" stopColor="#ff3647"/><stop offset=".904" stopColor="#e31587"/></radialGradient>
      </defs>
    </svg>
  );
}

function SafariLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
      <path fill="#0063DC" d="M171.322 238.72a114.5 114.5 0 0 0 80.094-101.539c5.215-64.039-42.4-121.874-106.438-127.09S23.104 52.49 17.888 116.528c-1.742 21.381 1.512 41.5 8.583 59.346" opacity=".15" />
      <path fill="#0063DC" d="M128 0C57.308 0 0 57.308 0 128s57.308 128 128 128 128-57.308 128-128S198.692 0 128 0" />
      <path fill="#fff" d="M37.064 218.936 131.273 124.73a7.5 7.5 0 0 1 10.607 0l45.59 45.59z" opacity=".25" />
      <path fill="url(#safariGrad)" d="m186.617 58.395-93.582 31.194a5 5 0 0 0-3.015 3.015l-31.194 93.582a5 5 0 0 0 6.388 6.389l93.582-31.194a5 5 0 0 0 3.015-3.015l31.194-93.582a5 5 0 0 0-6.388-6.389" />
      <circle cx="128" cy="128" r="37.333" fill="#0063DC" />
      <circle cx="128" cy="128" r="17.333" fill="#fff" />
      <defs>
        <linearGradient id="safariGrad" x1="95.773" x2="184.69" y1="61.552" y2="210.986" gradientUnits="userSpaceOnUse"><stop offset=".182" stopColor="#fff" stopOpacity=".5" /><stop offset=".65" stopColor="#fff" stopOpacity=".1" /><stop offset=".994" stopColor="#fff" stopOpacity="0" /></linearGradient>
      </defs>
    </svg>
  );
}

export function BrowserGate({ children }: { children: React.ReactNode }) {
  const blocked = useSyncExternalStore(subscribe, isFirefox, () => false);
  const [safariCopied, setSafariCopied] = useState(false);
  const url = typeof window !== "undefined" ? window.location.href : "";
  const domain = url.replace(/^https?:\/\//, "");

  function handleSafari() {
    navigator.clipboard.writeText(url).then(() => {
      setSafariCopied(true);
      setTimeout(() => setSafariCopied(false), 2000);
    });
  }

  if (blocked) {
    return (
      <div className="fixed inset-0 z-[200] flex items-center justify-center bg-[#08080f] px-6 text-center text-white">
        <div className="max-w-md">
          <div className="mb-6 flex items-center justify-center">
            <FirefoxLogo className="h-12 w-12 opacity-40" />
          </div>

          <h1 className="mb-3 text-2xl font-bold lg:text-3xl">
            periodict
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-lime-400 bg-clip-text text-transparent">
              ai
            </span>
            ble
          </h1>

          <p className="mb-2 text-base text-white/80">
            Firefox support is coming soon.
          </p>
          <p className="mb-8 text-sm text-white/50">
            For now, the 3D periodic table renders best in Chrome, Edge, or Safari.
            Open it in one of those browsers:
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`googlechrome://${domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium transition-colors hover:bg-white/10"
            >
              <ChromeLogo className="h-6 w-6" />
              Chrome
            </a>
            <a
              href={`microsoft-edge://${domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium transition-colors hover:bg-white/10"
            >
              <EdgeLogo className="h-6 w-6" />
              Edge
            </a>
            <button
              type="button"
              onClick={handleSafari}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium transition-colors hover:bg-white/10"
            >
              <SafariLogo className="h-6 w-6" />
              {safariCopied ? "Copied!" : "Safari"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}