import HeroImg from "../assets/images/hero.webp";
import Recommendation from "../components/sub-components/recommendation";
import SnowboradingImg from "../assets/images/snowboarding.webp";
import LinuxImg from "../assets/images/linux.webp";
import TailwindImg from "../assets/images/tailwind.webp";
import { FAQ } from "../components/sub-components/faq";
import { PrimaryLinkButton } from "../components/sub-components/primary-link-button";
import { CodeBracketsIcon } from "../components/sub-components/icons/code-brackets";
import { SwaggerIcon } from "../components/sub-components/icons/swagger-icon";
import { SecondaryLinkButton } from "../components/sub-components/secondary-link-button";
import { DocumentTextIcon } from "../components/sub-components/icons/document-text-icon";
import { IconBlock } from "../components/sub-components/icons/icon-block";
import ReactSvg from "../assets/react.svg";
import ViteSvg from "../assets/vite.svg";
import { recommendations } from "../Data/recommendations";
import { DollarIcon } from "../components/sub-components/icons/dollar-icon";
import { ChatBubbleIcon } from "../components/sub-components/icons/chat-bubble-icon";
import { HandshakeIcon } from "../components/sub-components/icons/handshake-icon";

const Home = () => {
  return (
    <>
      <>
        {/* Hero */}
        <section className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-20 xl:pt-[8rem]">
          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-8 xl:gap-20 md:items-start">
            <div className="my-5 lg:my-0 lg:flex lg:h-full lg:items-center">
              <div>
                <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
                  Hire{" "}
                  <span className="text-volvo-blue-light">Rick Penabella</span>{" "}
                  today
                </h1>
                <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
                  8+ years of Full-Stack Development namely React & C#
                </p>
                <p className="mt-3 text-lg text-gray-800 dark:text-gray-600">
                  Most recently on the Volvo Trucks SMA Dev Ops team but have
                  picked up Nodejs, express with SSR, and TypeORM
                </p>

                {/* Buttons */}
                <div className="mt-7 flex flex-wrap columns-2 lg:flex-row lg:flex gap-3 h-auto w-full justify-start">
                  <PrimaryLinkButton
                    text="View Demo"
                    icon={<CodeBracketsIcon />}
                  />
                  <PrimaryLinkButton
                    text="View Swagger"
                    href="swagger"
                    openInSameTab
                    icon={<SwaggerIcon />}
                  />
                  <SecondaryLinkButton
                    text="Learn More (cv)"
                    icon={<DocumentTextIcon />}
                    href="https://drive.google.com/file/d/1N9BM5rVDmtkvAjyzY5MG768OAqbWZFWz/view?usp=drive_link"
                  />
                </div>
                {/* End Buttons */}
                {/* Review */}
              </div>
            </div>
            {/* End Col */}
            <div className="relative ml-4">
              <img
                className="w-full rounded-md"
                src={HeroImg}
                alt="Rick's Family"
              />
              <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 w-full h-full rounded-md mt-4 -mb-4 mr-4 -ml-4 lg:mt-6 lg:-mb-6 lg:mr-6 lg:-ml-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0" />
              {/* End SVG*/}
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </section>
        {/* End Hero */}
        {/* Recommendations */}
        <section className="overflow-hidden">
          <div
            id="recommendations"
            className="relative max-w-[85rem] pt-20 pb-10 lg:pt-24 lg:pb-12 lg:mt-10 mx-auto"
          >
            <div className="max-w-2xl w-3/4 lg:w-1/2 mb-6 sm:mb-10 md:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-800 font-semibold dark:text-gray-200">
                Recommended by
              </h2>
            </div>
            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Cards */}
              {recommendations &&
                recommendations.map((r) => (
                  <Recommendation
                    key={r.name}
                    name={r.name}
                    title={r.title}
                    imgPath={r.imgPath}
                    recommendation={r.recommendation}
                  />
                ))}
              {/* End Cards */}
            </div>
            {/* End Grid */}
          </div>
        </section>
        {/* End Recommendations */}
      </>
      <>
        {/* Highlights */}
        <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 xl:py-40 mx-auto">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Highlights
          </h2>
          {/* Grid */}
          <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-1">
              <h4
                id="highlights"
                className="font-bold text-xl md:text-2xl text-gray-800 dark:text-gray-200"
              >
                Crush your backlog
              </h4>
              <p className="mt-2 md:mt-4 text-gray-500">
                No task is too big or small just paint the picture of what we
                should accomplish or chime me in on the conversation and we can
                analyze the business requirements & build something amazing
                together.
              </p>
            </div>
            {/* End Col */}
            <div className="lg:col-span-2">
              <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
                {/* Icon Block */}
                <div className="flex gap-x-5">
                  <svg
                    className="flex-shrink-0 mt-1 w-6 h-6 text-volvo-blue dark:volvo-blue-light"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z" />
                    <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z" />
                  </svg>
                  <div className="grow">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      Immediate Start
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                      Current contract ending purely from specific team budget
                      cuts. Hire confidently as fellow colleagues managers and
                      team mates alike give great references.
                    </p>
                  </div>
                </div>
                {/* End Icon Block */}
                {/* Icon Block */}
                <div className="flex gap-x-5">
                  <svg
                    className="flex-shrink-0 mt-1 w-6 h-6 text-volvo-blue dark:volvo-blue-light"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                  </svg>
                  <div className="grow">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      Support your team anywhere
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                      With a wide range of full-stack skills from back end SQL
                      queries, procedures, and views to painstaking CSS
                      drudgery, and even Azure cloud configurations no task is
                      too foreign
                    </p>
                  </div>
                </div>
                {/* End Icon Block */}
                {/* Icon Block */}
                <div className="flex gap-x-5">
                  <DollarIcon />
                  <div className="grow">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      Great value
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                      Current bill rate of 800kr per hour from the eworks long
                      approved consulting firm Silverside AB
                    </p>
                  </div>
                </div>
                {/* End Icon Block */}
                {/* Icon Block */}
                <div className="flex gap-x-5">
                  <ChatBubbleIcon />
                  <div className="grow">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      Save time communicating
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                      Born in the USA, California to be exact. Crystal clear english
                      and always happy to explain and/or listen anytime. Swedish is
                      intermediate and is on the roadmap.
                    </p>
                  </div>
                </div>
                {/* End Icon Block */}
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
          <div className="aspect-w-16 aspect-h-7 mt-20 pt-10 md:pt-20">
            <img
              className="w-full object-cover rounded-xl"
              src={SnowboradingImg}
              alt="Image Description"
            />
          </div>
        </section>
        {/* End Highlights */}
      </>
      {/* FAQ */}
      <FAQ />
      {/* End FAQ */}
      {/* Built With */}
      <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white mb-5 lg:mb-10">
          This web app was built with:
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-start gap-2">
          <IconBlock
            title="React"
            imgPath={ReactSvg}
            text="React 18.2 Hooks with Server Side Rendering"
          />
          <IconBlock
            title="Node"
            imgPath="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFDElEQVR4AaXUA6wsXRbF8f9e+1T3M8a2PRMnY9u2bdvh2LatYKxgbHvu430v1+yurnP2V5X7zP5er+S3yj4pcYF58Tcee8+Xfv1J/3nu5x77z8d/6KF3bnEhNO6OL//Bo73Fi775iOu+9FuP/VPy9C0zrrGpX127n9J3elX1217l12yxY9Pm1GIcGnfHtQOemzo+VlXV32W6ERAcyabNvRIlbi6lfyfzDzYlNy3GoXF28suuvaC6zChL9lgDIACMI+kll7tRSglMTzJZLbdntTivc268/PLtqysMDkt6sxkiOGMC6Pd7lFwsRyHCKrB3ynTAzG7d4mx04kK50rS3yJeduTqXX/ipJ/3AjEsDwXniEsmdyIWNmyACLu+mn0j6IcSVW/R6lbc4Sl3tOTRnLfb/tp8pek+q+K+JWwGFjRjnSwTtuckREKWbWpSgRBRht0sp7UnJ31ZKzi0grIW6utaVLxPej/te4RbD2sTTT3hiMWYCwIzkTs5BlEKOoESoBYUw9FyT1j3pHiaihbraPzOzPUb6Ur2sygSAcSEJcBclglLKkSnktiLCSkAy3/Snqakvf/+vv9/883/+3dQWkW1TT96s7OuBBZNGshPeQiEK5AgEHF5cYHF11S69eVefMFNbuHt4UtBUDGYrzJkoZkYhKCUgygnzwZ6Zw0gqa/UggBBA5enIKDbWp/tQgGCyBDS5UErQMRPTCwuMRiMqE47RUVdmIDnuwoqzdriHeTBpcsnkHJTINLnhwMI8pgQYwo5Mu5Lh3hGeRD3Xo4yMSdPkTFMKhHF4aYEcGTMDEzmMwFBXKQnJsCM3InOGsz006VswGNRD6iazuLZCksCgIxcmQ10FILFxcbUSNEsVzVCYTXR9mmiYW1kEcyTHMXTCdnUlceRuQILkYtDU/PMfs3Tzk8WoI9OXcBPyhJQ25uWoKyxAHcNaEkwvz7AwV7OwMEQyJkkQjCJTuajM8JZMOEJdkQpSgAVyY251hUE9IiVjz/8XkYwgJngHxrAZITNcRnLRT06VhLoqyq2CPAhrODA3S5IwMxaXhszOruESkyQiWBvVVJ5IZhjgBuoqR6FRA1Vh/+z8xr+bjaQk/vPfeSJi4r/j+mhIUwquRPKEW0Jd1RqQbcTyYJ2Z+eXTnnZ9fcSBQ8u424Q3AcvDNZI7ddMgqSPW88ByGtnBQ4voDK+6qsTU3jlyDjAmGguj3HRvwq6w/VIkc9RVunRdz82v9tdXM2Zn+n7QNIU9++dx18SfYnGwWi2OVpq59UXU1exvqsX5/fmxcs6a5GLqwBzDusHMJr2JRx9anl+tSw61xcpyY2WoT970Zf8TxmdOfHhOjMG/pg5f3LcQHInMPtUyIj7b5MZaqCttytHiD2+8hmjskebcAPgzYCeexCWmZ5dZHdQX58Jm8Cc3v55benTdNN6ilIgW6uqohia3GNX5b03ON0bcF1g/4UZwGf+Ymh7nF23AALjvlqp/k91btv2jxRV2Xiq3OEpdnc1ltuz+xmW27d6C8YYTvh9zSyvMLa5iGOfIG3qpt3nHpq3faHE26up8rnXJK72aS416GF8DSO78fc8BJOPEx4UgIr661Kz11m346hbno3F2+vfKlLG/nxno/njcAmPP2nDI9PwCkgAoEXtaN3fZA3b6ltxiHBpnpxvsukbc4KpXLmzNhvE7PK4qt0f85+D0qESpcykPN3HVque/D8LaaWkxjosAqoYXqu5e6SUAAAAASUVORK5CYII="
            text="First time building a true javascript node web server app"
          />
          <IconBlock
            title="Vite"
            imgPath={ViteSvg}
            text="SWC bundling- esbuild doesn`t support js decorators"
          />
          <IconBlock
            title="Express"
            imgPath={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAMFBMVEX////q6uqgoaEZGhtzc3SSk5Ourq5hYmLHx8f09PVOTk+7u7vf39+DhITT09M3ODgiPZ4kAAAAxElEQVR4Ac2OMQgBARSGv6sDQfbSKaWsHsgV6vZS9lK3F9lL2ctsvcmm7GWfyF5XNhvTbef+yT7x1ft7/f3/6/HHOC3r1gnmQLhGamYjDj5U7ALk7UbD4tp4T2EA4EnDFeGMxQygdQWqEwp+OQsBkXrlAU76nAA4Y2mlB2drotVMDMHN5mtMwbMYVeQjNsEKkaJcm3wv10fcl4Dr8zgSnQB2L/RYKdrKA3LW0etun6yFCMwsyTK6qzrFu733xbQOeAk/4gMf6S1GJRc9sQAAAABJRU5ErkJggg=="
            }
            text="Vite server mixes in the Express app with SSR"
          />
          <IconBlock
            title="TypeORM"
            imgPath={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEW0lEQVR4Ac3WA5AkSxSF4dvGTO/Ujm3btj3Ptm3btm3btm3btn3fH7M1ERW93b1GRXyRvcisU2lZ7h69epoDjdhNr7IdpZfZivVyme+HOkKdauofjZ1QCRsiP5rnkD/+odzXu7peaf+SCr/jdX630+gCfQR1BinfwR+E+UB3ie7Vk9zyt6ZHqJjokH9FonTEe5+e7/5Fr5X1aSCJl7v+vSogxx9/fETWANRxUybr9bat9BTvn9rhvohvs2uvJ0KAOIeoYUsnyAe6pv85GjD0XPvMCxxoRj96LQZQDoFYHz3QJ3qUM1mHvW9piuNJbXIGtNkTuQeQo17bZ1rgeJgGojATIBqTaEA3usyyAWOwI+iDphm09yIf94KWuwzMZ4AiAhzsjtKDvDMBAhhCAWosCjEEx1wB0uwCQ6MXX4BhlKDb1INqM0A0DPggELpdsFgDDCELVaZqSw+UYgRTsC9wAMuY5RLgcwI8pIe4/CECpKPMIs8yBG7ztxOiGXaYQ2CgyG1oSaQAhk1I3ESAn7XSeTObj1sP8wUPQRl6TX2oCRug0SXa5I3i6x+h7Y94eTYfJiEfXiha5cxn0lzHMPyhXd6t/+Lv2URmAngxZZn9ACEwCFtwAJaf/D1nMu5BL/zOx53M6krQHGeIANE2IeVuUK3xXKubBWLYC4THutmkoDpIFWZDggPwiNa7RdvcyZrlvJd3/MfHrUKPhA1QTnkn/+l7bfWs/i9/r7eJWBofRx96LQbREyqAbu6b7gG6fjte+ivdfzPDkqN17rkD/JPvEsZeCNBO+Suz9Zr/7hRniGXYgH70mWVt2DnQ4xXt9/vp+gcJ8KV2+sqVl6v+EX4SIo8AX2gRlVgF7ITBqyAP9RbFYQMw1phZBS9pqWv24tgHMlBhkY8hZKIBK8Ox2Dei+ViGqShB2pLcCQeRhHyLzMV/FoQ/DcdQgV6LeoyEDBAHw7YApyGTkLQZlB/qlPcZNqEYPdM+E8CJHgxjwGIUDSHvAzv6RPfwJHAZeYOheJb9YBbCB+DlwtoPsHwe0bPc33ObGdOrxQ/7axdOiHnIOEOwBd+IYEeU3iCr6fHeX9lXrtVat0tX9s/jMNJK0d38m+oV8hMNfIdHuF41LuidkP/fRfkkftRLHd/q9lEr6SlO4WyZd2W4MIKTaOgyDqUaAi3QrZg6LdS/HMehF07Ign3F9TR0idOmx3hEj/XPf13mjR7uIYTY9No5bS3/T2dnpyAfoxhGNTpgmGUDVkIbZmMIU0hADDIRBxeykIkAEmCDIB5ehA0wjhfxOFbE9TgLV+NQ3I9LsTOewBGoQi5mIQd5KEYcqtGMFPPljYgLHwBmo7tDsAa+xiR2xB24GPvheZyEehgQ+FGDOhSZQbKRiiykIxYRh+Fw7AZBLu5HCnYyf6+CGjyDA1CFLPiQjkKUmVKQBTGlzE+AJlRDEMAEfKhCEwQxWBcbIw1xZthkeBCADwaiISY/PJDl5vkffxoomqKAbnYAAAAASUVORK5CYII="
            }
            text="Connects to separate VPS`s postgres db"
            readMoreLink="swagger"
          />
          <IconBlock
            title="Swagger"
            text="SWC bundling- esbuild doesn`t support js decorators"
            readMoreLink="swagger"
          >
            <SwaggerIcon size={48} />
          </IconBlock>
          <IconBlock
            title="Linux"
            imgPath={LinuxImg}
            text="Both this site and the db sit on seperate Linux VPS`s"
          />
          <IconBlock
            title="Tailwind CSS"
            imgPath={TailwindImg}
            text="Only wrote ~30 CSS lines the rest are tailwind classes"
          />
        </div>
      </section>
      {/* End Built With */}
      {/* Hero */}
      <div className="pb-20 relative overflow-hidden before:absolute before:top-0 before:left-1/2 before:bg-no-repeat before:bg-top before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">

          {/* Title */}
          <div className="mt-5 max-w-xl text-center mx-auto">
            <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
              Any questions?
            </h1>
          </div>
          {/* End Title */}

          {/* Buttons */}
          <div className="mt-20 grid gap-3 w-full sm:inline-flex sm:justify-center">
            <PrimaryLinkButton href={`mailto:epenabellaj@gmail.com?subject=You%20are%20Hired!&body=${encodeURIComponent('When can you start?\n\nMailed from profile site')}`}
            text="Hire me" icon={<HandshakeIcon size={32}/>}/>
          </div>
          {/* End Buttons */}
          <div className="mt-10 max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              It's been a pleasure getting to know one another.
            </p>
          </div>
        </div>
      </div>
      {/* End Hero */}
    </>
  );
};

export default Home;
