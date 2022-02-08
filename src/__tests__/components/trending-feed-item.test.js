import Enzyme, { shallow } from "enzyme";
import TrendingFeedItem from "../../components/TrendingFeedItem";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const props = {
  TrendingFeedServerData: [
    {
      id: "7014877097244019970",
      text: "Inst: kikakim🤍",
      authorMeta: {
        id: "6785823001336415238",
        name: "kikakiim",
        nickName: "Kika Kim",
        avatar:
          "https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/a4777fe51994e2ff798bdc9dd1100846.jpeg?x-expires=1637089200&x-signature=AI9QoPIXQX%2F4YTxzLf%2BA5beaSO8%3D",
      },
      videoUrl:
        "https://v16m.tiktokcdn.com/09778319ff4e3994c3f3bf4e5b09e20a/61930e5b/video/tos/alisg/tos-alisg-pve-0037c001/513824f743834e84a2cc0d1e502524ac/?a=1233&br=3572&bt=1786&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=2021111519500401019019214352353071&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzNyZzM6ZjN3ODMzODczNEApZWdpaWY8Njw2N2hnZzloN2c2YWpycjRnZ2BgLS1kMS1zczNfMi4tNmFjMV82Ml42MC06Yw%3D%3D&vl=&vr=",
      videoMeta: {
        height: 960,
        width: 540,
      },
      diggCount: 1200000,
      commentCount: 8064,
    },
  ],
};


const setUp = (props) => shallow(<TrendingFeedItem trendingFeedServerData={props.TrendingFeedServerData} />);

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
