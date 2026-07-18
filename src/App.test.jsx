import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App routing', () => {
	it('renders the home route by default', () => {
		render(<App />);
		expect(screen.getByText('Home')).toBeInTheDocument();
	});
});
