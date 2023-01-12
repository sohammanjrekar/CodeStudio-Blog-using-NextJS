
import { useRouter } from 'next/router'
const pageNo=() =>{
    const router = useRouter();
    const page=router.query.pageno;
  return (
    <div> {page}</div>
  )
};

export default pageNo;