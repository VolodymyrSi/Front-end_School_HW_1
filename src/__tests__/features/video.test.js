import Enzyme, { shallow } from "enzyme";
import Video from "../../features/Video";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const props = {
  height: 640,
  src: 'xxx.com/id12345',
  width: 360,
};

const setUp = (props) => shallow(<Video {...props} />);

describe("Video components tests", () => {
  describe("Has props", () => {
    const component = setUp(props);
    it("should render Video component", () => {
      const video = component.find(".text-center");
      expect(video).toHaveLength(1);
    });
    it("should render video", () => {
      const video = component.find("video");
      expect(video).toHaveLength(1);
    });
    it ("should render appropriate video", () => {
        const video = component.find("video");
        expect(video.prop("src")).toEqual(props.src);
    })
    it ("should render appropriate video height", () => {
        const video = component.find("video");
        expect(video.prop("height")).toEqual(props.height);
    })
    it ("should render appropriate video width", () => {
        const video = component.find("video");
        expect(video.prop("width")).toEqual(props.width);
    })
  });
});
