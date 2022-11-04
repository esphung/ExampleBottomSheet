import React, { useCallback, useMemo, useRef, useContext } from "react";

import { Text, View } from "react-native";

import BottomSheet from "@gorhom/bottom-sheet";

import { BottomSheetContext } from "../contexts";

function PrimaryBottomSheet() {
  const renders = useRef(0);
  renders.current++;
  // console.log('PrimaryBottomSheet renders.current: ', renders.current);

  const { bottomSheetContext } = useContext(BottomSheetContext);
  return (
    <BottomSheet
      ref={bottomSheetContext.ref}
      index={bottomSheetContext.index} // -1, 0, 1, 2
      snapPoints={bottomSheetContext.snapPoints}
      onChange={bottomSheetContext.handleSheetChanges}
      enablePanDownToClose={bottomSheetContext.enablePanDownToClose}
      handleComponent={bottomSheetContext.handleComponent}
    >
      {bottomSheetContext.renderContent()}
    </BottomSheet>
  );
}

export default PrimaryBottomSheet;
