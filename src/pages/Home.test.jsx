import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from './Home';

describe('Home page', () => {
	it('renders without crashing', () => {
		render(<Home />);
		expect(screen.getByText('Home')).toBeInTheDocument();
	});
});
