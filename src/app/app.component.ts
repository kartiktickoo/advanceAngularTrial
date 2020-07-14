import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-app';

  constructor(private route: ActivatedRoute,
    private router: Router) { }
  onSubmit(f) {
    console.log(f.form.value.search);
    this.router.navigate(['/pokemonDetailComponent'], { queryParams: { url: f.form.value.search, search: true } })
  }
}
