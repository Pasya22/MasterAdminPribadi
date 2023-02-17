import LayoutAdmin from "@/components/Layout/LayoutAdmin";
import { Box } from "@mui/material";
import Head from "next/head";

export default function MasterServiceTask() {
  return (
    <Box>
      <Head>
        <title>Master-ServiceTask</title>
      </Head>
      <LayoutAdmin>
        <p className="text-gray-700 text-3xl mb-16 font-bold">Master / ServiceTask</p>
      </LayoutAdmin>
    </Box>
  );
}