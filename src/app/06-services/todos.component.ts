import { TodosService } from './todos.service';

export class TodosComponent {
    todos: any[] = [];
    message;
    constructor(private service: TodosService){}
    ngOnInit(){
        this.service.getTodos().subscribe((t: any) => this.todos = t);
    }
    add(){
        var newTodo = {title: '...'};
        this.service.add(newTodo).subscribe(
            (t: any) => this.todos.push(t),
            err => this.message = err
        );
    }
    delete(id){
        if(confirm('Are you sure?'))
        this.service.delete(id).subscribe();
    }
}