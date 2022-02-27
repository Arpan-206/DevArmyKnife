import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

export default function ColorPick() {
  const [color, setColor] = useColor("hex", "#ff8906");
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white anurati">
            Color Picker
          </h1>
          <p className="mx-auto leading-relaxed items-start text-base comfortaa justify-start">
            This is a simple color picker for you to choose your colors.
          </p>
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <ColorPicker
              height={250}
              width={1000}
              color={color}
              onChange={setColor}
              hideHSV
              dark
            />
          </div>
        </div>
      </section>
    </>
  );
}
