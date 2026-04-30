import { AdminTitle } from "@/admin/components/AdminTitle";
import { CustomFullScreenLoading } from "@/components/custom/CustomFullScreenLoading";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { currencyFormatter } from "@/lib/currency-formatter";
import { useProducts } from "@/shop/hooks/useProducts";
import {  PencilIcon, PlusIcon } from "lucide-react";
import { Link } from "react-router";

export const AdminProductsPage = () => {

  const { data, isLoading } = useProducts();


  if(isLoading) return <CustomFullScreenLoading/>


  return (
    <>
      <div className="flex justify-between items-center">
        <AdminTitle title="Products" subtitle="Manage your product catalog" />

        <div className="flex justify-end mb-10 gap-4">
          <Link to={"/admin/products/new"}>
            <Button>
              <PlusIcon />
              New Product
            </Button>
          </Link>
        </div>
      </div>

      <Table className="bg-white p-10 shadow-xs border-gray-200 mb-10">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Inventory</TableHead>
            <TableHead>Sizes</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>

        {
          data?.products?.map(product => (
             <TableRow key={product.id}>
            <TableCell>
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-20 h-20 object-cover rounded-md"
              />
            </TableCell>
            <TableCell>
              <Link to={`/admin/products/${product.title}`}
                className="hover:text-blue-500 underline"
              
              > 
             
                {product.title}
              </Link>
            </TableCell>
            <TableCell> {currencyFormatter(product.price)} </TableCell>

            <TableCell> {product.gender} </TableCell>
            <TableCell> {product.stock} </TableCell>
            <TableCell> {product.sizes.join(',')}</TableCell>
            <TableCell className="text-right">
              {/* <Link to={`t-shirt-teslo`}> Edit</Link> */}
              <Link to={`/admin/products/${product.id}`}
              > 
              <PencilIcon className="w-4 h-4 text-blue-500"/>
              </Link>
            </TableCell>
          </TableRow>
          )
        )}
         
          
        </TableBody>
      </Table>

      <CustomPagination totalPages={data?.pages || 0} />
    </>
  );
};
