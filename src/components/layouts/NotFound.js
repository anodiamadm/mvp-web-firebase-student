import PageHeader from "./PageHeader";
import PageMessage from "./PageMessage";

const NotFound = () => {
  return (
    <div className="page-body c777">
      <PageHeader pageTitle={{bold: '404', normal: 'Error'}}/>
      <PageMessage msg={{type: 'error', desc: 'Page not found!'}}/>
      <img src={ process.env.PUBLIC_URL + '/resources/error404.png' } alt='404' className="bl error-image" />
    </div>
  );
}
 
export default NotFound;