import { act, renderHook } from "@testing-library/react-hooks";
import { mocksPunchesList } from "../../../test/mocks/punchList";
import usePunches from "./use-punches";

const setup = () => renderHook(() => usePunches());

describe("usePunches", () => {
  describe("punches", () => {
    it("it should returns an list of punches", () => {
      const { result } = setup();

      expect(result.current.punches).toEqual(mocksPunchesList);
    });
  });
});

describe("deletePunches", () => {
  it("it should delete a punch with given Id", () => {
    const { result } = setup();
    const initialPunchesList = [...result.current.punches];

    const punchId = 1;

    act(() => {
      result.current.deletePunch(punchId);
    });

    expect(initialPunchesList).not.toEqual(result.current.punches);
  });

  it("returns updated punches length", () => {
    const { result } = renderHook(() => usePunches());

    expect(result.current.punches).toHaveLength(4);

    act(() => {
      result.current.deletePunch(1);
    });

    expect(result.current.punches).toHaveLength(3);
  });
});

describe("When is restored a removed punch", () => {
  it("returns punches with restored punch at same index position", () => {
    const { result } = renderHook(() => usePunches());

    const punchRemovedIndex = 3;
    const punchRemoved = result.current.punches[punchRemovedIndex];

    act(() => {
      result.current.deletePunch(punchRemoved.id);
    });

    act(() => {
      result.current.restorePunch({
        index: punchRemovedIndex,
        punchRemoved,
      });
    });

    const restoredPunch = result.current.punches[punchRemovedIndex];

    expect(restoredPunch).toStrictEqual(punchRemoved); 
  });
});