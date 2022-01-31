import axios from "axios";

import fetchFeed from "../../services/feedRequest";

jest.mock("axios");

describe("fetchUsers", () => {
  describe("when API call is successful", () => {
    it("should return feed", async () => {
      // given
      const users = [
        { id: 1, name: "John" },
        { id: 2, name: "Andrew" },
      ];
      axios.get.mockResolvedValueOnce(users);

      // when
      const result = await fetchFeed();

      // then
      expect(result).toEqual(users);
    });
  });

  describe("when API call fails", () => {
    it("should return empty users list", async () => {
      // given
      const message = "Network Error";
      axios.get.mockRejectedValueOnce(new Error(message));

      // when
      const result = await fetchFeed();

      // then
      expect(result).toEqual([]);
    });
  });
});
