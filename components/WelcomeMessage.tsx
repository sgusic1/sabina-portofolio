import StickyHeaderName from "./StickyHeaderName";

function WelcomeMessage() {
  return (
    <>
      <div className="h-screen bg-black flex flex-col items-center justify-center">
        <div className="text-center space-y-4 ">
          <div className="text-white text-3xl -translate-y-8">
            Hi, my name is
          </div>
        </div>
      </div>
      <div className="sticky top-89 bg-black/80 z-50 -translate-y-90">
        <StickyHeaderName />
      </div>
    </>
  );
}

export default WelcomeMessage;
