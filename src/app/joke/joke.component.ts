// joke.component.ts - JokeComponent displays a random joke fetched from JokeService
// Import Angular CommonModule for common directives
import { CommonModule } from '@angular/common';
// Import Component decorator from Angular core
import { Component } from '@angular/core';
// Import JokeService to fetch jokes
import { JokeService } from '../services/joke.service';

/**
 * JokeComponent is responsible for displaying a random joke.
 * It fetches a joke from JokeService and handles loading and error states.
 */
@Component({
  // Selector for the component's HTML tag
  selector: 'app-joke',
  // Import CommonModule for template usage
  imports: [CommonModule],
  // Path to the component's HTML template
  templateUrl: './joke.component.html',
  // Path to the component's SCSS style file
  styleUrl: './joke.component.scss',
})
export class JokeComponent {
  /**
   * The setup (question) part of the joke
   */
  jokeSetup: string = '';
  /**
   * The punchline (answer) part of the joke
   */
  jokePunchline: string = '';
  /**
   * Indicates if a joke is currently being loaded
   */
  isLoading: boolean = false;
  /**
   * Stores any error message encountered during joke fetching
   */
  errorMessage: string = '';

  /**
   * Injects JokeService for fetching jokes
   */
  constructor(private jokeService: JokeService) {}

  /**
   * Fetches a random joke from the JokeService.
   * Handles loading, success, and error states.
   */
  fetchJoke() {
    this.isLoading = true; // Set loading state
    this.errorMessage = ''; // Clear previous errors

    this.jokeService.getRandomJoke().subscribe({
      // On success, update joke setup and punchline
      next: (joke) => {
        this.jokeSetup = joke.setup;
        this.jokePunchline = joke.punchline;
        this.isLoading = false;
      },
      // On error, show error message and clear joke
      error: () => {
        this.errorMessage = 'Failed to fetch a joke. Please try again!';
        this.jokeSetup = '';
        this.jokePunchline = '';
        this.isLoading = false;
      },
    });
  }
}
