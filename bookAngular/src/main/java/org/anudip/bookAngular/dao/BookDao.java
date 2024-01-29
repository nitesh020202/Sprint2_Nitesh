package org.anudip.bookAngular.dao;

import java.util.List;

import org.anudip.bookAngular.bean.Book;

public interface BookDao {
	public void save(Book book);
	public Book findBookById(Long id);
	public List<Book> findAllBooks();
	public void deleteBookById(Long id);
	public Long generateBookId();
	

}
