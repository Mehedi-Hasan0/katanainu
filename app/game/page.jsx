export default function TheGame() {
  return (
    <main className="overflow-hidden">
      <div className="bg-[url('/assets/images/team_bg.webp')] bg-cover pt-36 sm:pt-44 pb-0 md:pt-48 lg:pt-72 md:pb-20">
        <div className="main-container">
          <div className="flex flex-col justify-center items-center gap-2">
            <h5 className="uppercase font-jost font-bold text-gradient text-xl sm:text-2xl md:text-3xl">
              the game
            </h5>
            <h2 className=" max-w-[900px] text-2xl sm:text-3xl md:text-4xl lg:text-[38px] text-center uppercase font-jost text-white font-bold">
              Play to earn ecosystem
            </h2>
          </div>

          <div className="mt-10 sm:mt-14 md:mt-16 lg:mt-20 xl:mt-24 flex flex-col md:flex-row items-start">
            {/* 1st container */}
            <div className="flex flex-col flex-1 px-4 py-4 md:py-0">
              <h3 className="font-grind uppercase text-xl sm:text-2xl md:text-3xl text-white mb-4 md:mb-6">
                Katana Inu Game
              </h3>
              <p className="text-[#e7e7e7] text-xs md:text-sm leading-5 md:leading-7 text-justify mb-2 md:mb-4">
                Katana Inu, a free-to-play fighting game, offers players the
                opportunity to earn exclusive NFTs and Katana Inu tokens as
                in-game rewards. These rewards can be acquired by winning
                tournaments against other players and teams, completing in-game
                quests, playing solo, or teaming up with others.
              </p>
            </div>

            {/* 2nd container */}
            <div className="flex-1 px-4 py-4 md:py-0">
              <div className="flex flex-col flex-1 px-4 py-4 md:py-0">
                <h3 className="font-grind uppercase text-xl sm:text-2xl md:text-3xl text-white mb-4 md:mb-6">
                  Game Modes
                </h3>
                <p className="text-[#e7e7e7] text-xs md:text-sm leading-5 md:leading-7 text-justify mb-2 md:mb-4">
                  Katana Inu&apos;s primary game mode will be Battle-Royale,
                  with a maximum of 60 players. In this mode, players can choose
                  to squad up or go solo against a team of other players in an
                  interactive open-world map. Katana Inu will also feature
                  different game modes in smaller map arenas, like 1v1 and 3v3.
                  While the Battle-Royale mode launched in Q3 2023, the
                  developers plan to introduce these more competitive game modes
                  in the future.
                </p>
                <p className="text-[#e7e7e7] text-xs md:text-sm leading-5 md:leading-7 text-justify mb-2 md:mb-4">
                  NFTs play a crucial role in Katana Inu. They serve as skins
                  and other important in-game assets, offering customization
                  options. These items are strictly for aesthetic purposes and
                  do not impact combat. Players can also earn many other
                  exciting collectibles, including weapons, abilities, spells,
                  poses, and skins, simply by playing the game.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
