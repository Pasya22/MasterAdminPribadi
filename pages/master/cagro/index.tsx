import LayoutAdmin from "@/components/Layout/LayoutAdmin";
import { Box } from "@mui/material";
import Head from "next/head";

export default function MasterCategoryGroup() {
  return (
    <Box>
      <Head>
        <title>Master-CategoryGroup</title>
      </Head>
      <LayoutAdmin>
        <p className="text-gray-700 text-3xl mb-16 font-bold">Master / CategoryGroup</p>
      </LayoutAdmin>
    </Box>
  );
}