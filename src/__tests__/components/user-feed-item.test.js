import Enzyme, { shallow } from "enzyme";
import UserFeedItem from "../../components/UserFeedItem";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const props = {
  userFeedServerData: [
    {
      id: "7031029610628320518",
      video: {
        height: 1024,
        width: 576,
        playAddr:
          "https://v39-eu.tiktokcdn.com/04db0d682f4991eb515c8b1bd0c0a35b/6194edb1/video/tos/alisg/tos-alisg-pve-0037c001/449c8bd66c7941a5ba06ef064081e855/?a=1233&br=3502&bt=1751&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=202111170555190101890742193F004BAB&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amttNjU6ZjtmNzMzODczNEApNDhoOTozNWU2NzdkM2Y0ZGdtcTBxcjRvY3JgLS1kMS1zcy5iNDJfMTU2NDMyXjYvNTI6Yw%3D%3D&vl=&vr=",
      },
      author: {
        nickname: "Олег",
        avatarThumb:
          "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/1727974373153eaef0f6f558bf217bc8~c5_100x100.jpeg?x-expires=1637143200&x-signature=9CiaTaf3MNXs8VJ4UbqKDhlCY8k%3D",
      },
      stats: {
        diggCount: 6,
        commentCount: 0,
        playCount: 69,
      },
    },
  ],
};

const setUp = (props) =>
  shallow(<UserFeedItem userFeedServerData={props.userFeedServerData} />);

describe("Trending feed component tests", () => {
  describe("renders one item", () => {
    const component = setUp(props);
    it("should render feed component", () => {
      const feedItem = component.find("Card");
      expect(feedItem).toHaveLength(1);
    });
    it("should render Video component", () => {
      const video = component.find("Video");
      expect(video).toHaveLength(1);
    });
    it("should render Author component", () => {
      const author = component.find("Author");
      expect(author).toHaveLength(1);
    });
    it("should render Stats component", () => {
      const stats = component.find("Stats");
      expect(stats).toHaveLength(1);
    });
  });
});
