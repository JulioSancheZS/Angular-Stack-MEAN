import express, {Application} from 'express'
import routesProducto from '../routes/producto';
import routerUser from '../routes/user'
import { Producto } from './producto';
import { User } from './user';
import cors from 'cors'


class Server {

    private app: Application; 
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.rutas();
        this.dbConnect();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log("App corriendo en el puerto " + this.port)
        })
    }

    // router() {
    //     this.app.get('/', (req: Request, response: Response) => {
    //         response.json({
    //             msg: 'API working'
    //         })
    //     })
    //     //Usamos api
    //     this.app.use('/api/productos', routerProduct);
    // }
    
    rutas(){

    
        this.app.use('/api/producto', routesProducto)
        this.app.use('/api/user', routerUser)
      
    }
 //parsear en json
    midlewares(){
       this.app.use(express.json());

       this.app.use(cors());
    }

    async dbConnect() {
        try {
            await Producto.sync()
            await User.sync();
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
}

export default Server