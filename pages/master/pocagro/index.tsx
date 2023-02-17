import LayoutAdmin from "@/components/Layout/LayoutAdmin";
import { Box } from "@mui/material";
import Head from "next/head";

export default function MasterPocagro() {
  return (
    <Box>
      <Head>
        <title>Master-Pocagro</title>
      </Head>
      <LayoutAdmin>
        <p className="text-gray-700 text-3xl mb-16 font-bold">Master / Pocagro</p>
      </LayoutAdmin>
    </Box>
  );
}