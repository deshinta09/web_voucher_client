import { configureStore } from "@reduxjs/toolkit";
import voucherSlice from "./feature/voucherSlice";
import categoriedSlice from "./feature/categoriedSlice";
import voucherClaimSlice from "./feature/voucherClaimSlice";

export default configureStore({
  reducer: {
    voucher: voucherSlice,
    category: categoriedSlice,
    voucherClaim: voucherClaimSlice,
  },
});
