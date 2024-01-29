package org.anudip.bookAngular.dao;

import java.util.List;
import org.anudip.bookAngular.bean.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

@Service
@Repository
public class BookDaoImpl implements BookDao {
	@Autowired
	private BookRepository bookRepository;

	@Override
	public void save(Book book) {
		bookRepository.save(book);
	}

	@Override
	public Book findBookById(Long id) {
		return bookRepository.findById(id).get();
	}

	@Override
	public List<Book> findAllBooks() {
		// TODO Auto-generated method stub
		return bookRepository.findAll();
	}

	@Override
	public void deleteBookById(Long id) {
		bookRepository.deleteById(id);
	}

	@Override
	public Long generateBookId() {
		int bookCount=bookRepository.getBookCount();
		long newId=10000L+bookCount+1;
		return newId;
	}

}
