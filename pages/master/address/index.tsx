import LayoutAdmin from "@/components/Layout/LayoutAdmin";
import { Box } from "@mui/material";
import Head from "next/head";

export default function MasterAddress() {
  return (
    <Box>
      <Head>
        <title>Master-Address</title>
      </Head>
      <LayoutAdmin>
        <p className="text-gray-700 text-3xl mb-16 font-bold">Master / Address</p>
      </LayoutAdmin>
    </Box>
  );
}