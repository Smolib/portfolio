import SmallBlock from "./SmallBlock";
import layout from "../data/layout";
import software from "../data/software";
import another from "../data/another";

function Skills() {
  return (
  <section id="skills" className="skills">
    <SmallBlock name="Вёрстка" info={layout}/>
    <SmallBlock name="Программная разработка" info={software}/>
    <SmallBlock name="Дополнительные инструменты" info={another}/>
  </section>
  );
}
export default Skills;
